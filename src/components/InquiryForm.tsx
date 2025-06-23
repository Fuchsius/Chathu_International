
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ isOpen, onClose, category }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData, 'Category:', category);
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours!",
    });
    
    // Reset form and close dialog
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-2xl border-0 shadow-2xl">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {category ? `Inquire About ${category}` : 'Product Inquiry'}
          </DialogTitle>
          <p className="text-gray-600 mt-2">Fill out the form below and we'll respond within 24 hours</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message / Requirements *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={category ? `I'm interested in ${category}. Please provide more details about...` : "Please describe your requirements in detail..."}
              required
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl min-h-[100px]"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryForm;
