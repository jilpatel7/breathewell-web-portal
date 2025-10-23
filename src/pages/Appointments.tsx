import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    visitType: 'clinic',
    concern: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment request submitted! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      visitType: 'clinic',
      concern: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: 'What should I bring for my first visit?',
      answer: 'Please bring your ID, insurance card, list of current medications, and any previous medical records related to your respiratory condition.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. Please contact our office to verify your specific coverage.',
    },
    {
      question: 'How long is a typical consultation?',
      answer: 'Initial consultations typically last 45-60 minutes, while follow-up visits are usually 20-30 minutes.',
    },
    {
      question: 'Can I schedule an online consultation?',
      answer: 'Yes, we offer telemedicine appointments for suitable cases. Select "Online Consultation" when booking.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take the first step towards better respiratory health. Book your consultation with Dr. Jaimin Patel today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2 animate-fade-in">
              <Card className="border-border shadow-medium">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                      Book an Appointment
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll confirm your appointment shortly
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="visitType">Visit Type *</Label>
                      <select
                        id="visitType"
                        name="visitType"
                        value={formData.visitType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                        required
                      >
                        <option value="clinic">Clinic Visit</option>
                        <option value="online">Online Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="concern">Reason for Visit *</Label>
                      <Textarea
                        id="concern"
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your symptoms or concerns..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4568</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Email</p>
                        <p className="text-sm text-muted-foreground">info@pulmoone.com</p>
                        <p className="text-sm text-muted-foreground">appointments@pulmoone.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Medical Plaza, Suite 400<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Clinic Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Saturday<br />
                          10:00 AM - 6:00 PM<br />
                          <span className="text-destructive">Sunday: Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Emergency?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For medical emergencies, please call 911 or visit your nearest emergency room immediately.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Emergency Line
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about appointments and visits
              </p>
            </div>
            <div className="space-y-4 animate-fade-in-up">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Card className="border-border shadow-medium overflow-hidden">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Maps Integration</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Medical Plaza, Suite 400, City, State 12345
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
