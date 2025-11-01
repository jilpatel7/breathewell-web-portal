import { useParams, Link } from 'react-router-dom';
import { serviceDetails } from '@/data/serviceDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, CheckCircle2, AlertCircle, Activity, Wrench, Shield, Pill } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm">Specialized Care</Badge>
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/appointments">
                <Button size="lg" className="shadow-glow hover:shadow-strong transition-all">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-2xl shadow-strong w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Causes & Risk Factors
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.causes.map((cause, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground">{cause}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Signs & Symptoms
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.symptoms.map((symptom, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground">{symptom}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                {service.procedures.title}
              </h2>
            </div>
            <div className="space-y-4">
              {service.procedures.steps.map((step, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Medical Devices & Equipment
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.devices.map((device, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <p className="text-sm text-foreground">{device}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Pill className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                {service.treatment.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.treatment.options.map((option, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{option}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Prevention & Self-Care
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.prevention.map((tip, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Schedule a consultation with Dr. Jaimin Patel to discuss your personalized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointments">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
