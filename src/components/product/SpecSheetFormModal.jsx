
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, CheckCircle, Download, Loader2 } from "lucide-react";

export default function SpecSheetFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ fullName: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Use the direct link to the user-uploaded, working PDF
        const specSheetUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/192652540_SentinelTowersS1Series.pdf';
        const link = document.createElement('a');
        link.href = specSheetUrl;
        link.setAttribute('download', 'Sentinel_Towers_S1_Series_Spec_Sheet.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setFormData({ fullName: "", email: "", company: "" });
    setIsSubmitted(false);
    onClose();
  };
  
  // Reset form state when modal is reopened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", company: "" });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0d0d0d] border-[#333333] text-white sm:max-w-[480px]">
        <DialogHeader>
          <div className="flex justify-between items-center">
             <DialogTitle className="text-2xl font-bold text-white">Download Spec Sheet</DialogTitle>
             <button onClick={resetAndClose} className="text-gray-400 hover:text-white rounded-full p-1 transition-colors">
                <X className="w-5 h-5" />
             </button>
          </div>
          <DialogDescription className="text-gray-400 pt-2">
            Enter your details below to receive the Sentinel 1 specification sheet.
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-[#cbe30b] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-6">Your download has started automatically. Check your downloads folder for the spec sheet.</p>
            <Button onClick={resetAndClose} className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black font-bold">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} action="https://formspree.io/f/movlopbz" method="POST" className="space-y-4 py-4">
             <input type="hidden" name="_subject" value="New Spec Sheet Download Request" />
             <div className="space-y-2">
              <Label htmlFor="fullName" className="text-[#e5e5e5]">Full Name *</Label>
              <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="bg-[#1a1a1a] border-[#333333] text-white" placeholder="John Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#e5e5e5]">Email *</Label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-[#1a1a1a] border-[#333333] text-white" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#e5e5e5]">Company</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="bg-[#1a1a1a] border-[#333333] text-white" placeholder="Acme Inc." />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black font-bold">
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : <>Download Now <Download className="ml-2 h-4 w-4" /></>}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
