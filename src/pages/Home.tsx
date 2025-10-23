import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, Heart, Stethoscope, Activity, Calendar, Award, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import heroImage from '@/assets/hero-doctor.jpg';
import doctorPortrait from '@/assets/doctor-jaimin-patel.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';

const Home = () => {
  const services = [
    {
      icon: Wind,
      title: 'Asthma Management',
      description: 'Comprehensive care and treatment plans to help you manage asthma and breathe easier every day.',
    },
    {
      icon: Heart,
      title: 'Allergy Testing',
      description: 'Advanced diagnostic testing to identify allergens and develop personalized treatment strategies.',
    },
    {
      icon: Activity,
      title: 'COPD Treatment',
      description: 'Expert management of chronic obstructive pulmonary disease with cutting-edge therapies.',
    },
    {
      icon: Stethoscope,
      title: 'Sleep Disorders',
      description: 'Specialized evaluation and treatment for sleep apnea and other respiratory sleep conditions.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      condition: 'Asthma Patient',
      text: "Dr. Jaimin Patel completely changed my life. After years of struggling with asthma, I can finally breathe freely and enjoy activities I love.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      condition: 'Allergy Treatment',
      text: 'The thorough allergy testing and personalized treatment plan have made such a difference. I highly recommend Pulmo One!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      condition: 'COPD Management',
      text: 'The care and attention I receive here is exceptional. Dr. Jaimin Patel takes time to explain everything and truly cares about my wellbeing.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Patients Treated' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '98%', label: 'Success Rate' },
    { icon: Stethoscope, number: '20+', label: 'Specializations' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dr. Jaimin Patel consulting with patient"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Breathe Easy with Expert Lung & Allergy Care
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Pulmo One Lung Care & Allergy Center – Comprehensive Respiratory Solutions by Dr. Jaimin Patel, Board-Certified Pulmonologist
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Know More About Dr. Jaimin Patel
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-heading font-bold text-3xl text-foreground mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={doctorPortrait}
                alt="Dr. Jaimin Patel"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Meet Dr. Jaimin Patel
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Board-certified pulmonologist with over 15 years of experience in respiratory medicine and allergy care. Dr. Jaimin Patel is dedicated to providing compassionate, evidence-based care to help patients breathe better and live fuller lives.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-foreground">MBBS, MD (Pulmonary Medicine)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-foreground">Fellow, American College of Chest Physicians</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-foreground">Founder, Pulmo One Lung Care & Allergy Center</p>
                </div>
              </div>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Comprehensive Respiratory Care
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert treatment for a wide range of lung and allergy conditions with personalized care plans
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                State-of-the-Art Facility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our modern clinic is equipped with the latest diagnostic and treatment technology to provide you with the best possible care in a comfortable, welcoming environment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced Pulmonary Function Testing',
                  'Comprehensive Allergy Testing Lab',
                  'Sleep Study Facilities',
                  'Nebulization Treatment Rooms',
                  'Digital Imaging & Diagnostics'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline">
                Schedule a Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={clinicInterior}
                alt="Pulmo One Clinic Interior"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from patients who have experienced life-changing care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-scale-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Ready to Breathe Better?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Schedule your consultation today and take the first step towards improved respiratory health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointments">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Call: +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
