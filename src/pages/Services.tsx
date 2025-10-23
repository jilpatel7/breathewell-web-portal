import { Wind, Heart, Activity, Stethoscope, Thermometer, TestTube, Microscope, Moon, Syringe, Shield } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: 'Asthma Management',
      description: 'Comprehensive evaluation and personalized treatment plans for asthma control. Advanced therapies including inhaler techniques, medication optimization, and lifestyle modifications.',
    },
    {
      icon: Heart,
      title: 'Allergy Testing & Treatment',
      description: 'State-of-the-art allergy testing to identify triggers. Customized immunotherapy and treatment plans to manage seasonal and year-round allergies effectively.',
    },
    {
      icon: Activity,
      title: 'COPD Care',
      description: 'Expert management of Chronic Obstructive Pulmonary Disease with advanced therapies, pulmonary rehabilitation guidance, and ongoing monitoring.',
    },
    {
      icon: Stethoscope,
      title: 'Sleep Disorders',
      description: 'Comprehensive sleep studies and treatment for sleep apnea, snoring, and other respiratory-related sleep conditions using modern diagnostic tools.',
    },
    {
      icon: TestTube,
      title: 'Pulmonary Function Tests',
      description: 'Advanced diagnostic testing including spirometry, lung volume measurements, and diffusion capacity tests for accurate respiratory assessment.',
    },
    {
      icon: Thermometer,
      title: 'Bronchitis Treatment',
      description: 'Effective treatment for acute and chronic bronchitis with personalized medication plans and respiratory therapy recommendations.',
    },
    {
      icon: Microscope,
      title: 'Interstitial Lung Disease',
      description: 'Specialized care for various interstitial lung diseases including diagnosis, monitoring, and treatment of lung tissue disorders.',
    },
    {
      icon: Moon,
      title: 'Smoking Cessation',
      description: 'Comprehensive smoking cessation programs with counseling, medication management, and ongoing support to help you quit successfully.',
    },
    {
      icon: Syringe,
      title: 'Immunization Services',
      description: 'Preventive care including flu shots, pneumonia vaccines, and other respiratory-related immunizations for optimal lung health protection.',
    },
    {
      icon: Shield,
      title: 'Occupational Lung Disease',
      description: 'Expert evaluation and management of work-related respiratory conditions with personalized treatment and workplace accommodation guidance.',
    },
  ];

  const procedures = [
    'Spirometry and Lung Function Testing',
    'Bronchodilator Response Testing',
    'Peak Flow Monitoring',
    'Allergy Skin Prick Testing',
    'Nebulization Therapy',
    'Oxygen Therapy Assessment',
    'Home Sleep Apnea Testing',
    'Exhaled Nitric Oxide Testing',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Comprehensive Respiratory Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert diagnosis and treatment for a complete range of lung and allergy conditions. Every service is personalized to your unique health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Diagnostic Procedures & Tests
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced diagnostic capabilities for accurate assessment and monitoring
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up">
              {procedures.map((procedure, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-5 bg-card rounded-xl border border-border hover:shadow-medium transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{procedure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Why Choose Pulmo One?
              </h2>
              <p className="text-lg text-muted-foreground">
                Excellence in respiratory care with a patient-first approach
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
              {[
                {
                  title: 'Expert Care',
                  description: '15+ years of specialized experience in pulmonology and allergy treatment'
                },
                {
                  title: 'Advanced Technology',
                  description: 'State-of-the-art diagnostic equipment and treatment modalities'
                },
                {
                  title: 'Personalized Treatment',
                  description: 'Customized care plans tailored to your specific condition and lifestyle'
                },
                {
                  title: 'Comprehensive Approach',
                  description: 'Holistic care addressing all aspects of respiratory health'
                },
                {
                  title: 'Patient Education',
                  description: 'Detailed explanations and guidance for managing your condition'
                },
                {
                  title: 'Convenient Access',
                  description: 'Flexible scheduling and prompt attention to your healthcare needs'
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-medium">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white animate-scale-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Start Your Journey to Better Breathing
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Schedule a consultation to discuss your respiratory health needs and treatment options
            </p>
            <Link to="/appointments">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
