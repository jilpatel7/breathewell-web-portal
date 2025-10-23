import { GraduationCap, Award, BookOpen, Heart, Building2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import doctorPortrait from '@/assets/doctor-jaimin-patel.jpg';
import clinicDoctorDesk from '@/assets/clinic-doctor-desk.jpg';
import clinicPatientConsultation from '@/assets/clinic-patient-consultation.jpg';

const About = () => {
  const education = [
    {
      degree: 'MBBS',
      institution: 'Prestigious Medical College',
      year: '2005',
    },
    {
      degree: 'MD (Pulmonary Medicine)',
      institution: 'Leading Medical University',
      year: '2010',
    },
    {
      degree: 'Fellowship in Respiratory Medicine',
      institution: 'International Medical Center',
      year: '2012',
    },
  ];

  const affiliations = [
    'Leading General Hospital - Senior Consultant',
    'City Medical Center - Visiting Pulmonologist',
    'Advanced Healthcare Institute - Consultant',
    'Metropolitan Hospital - Respiratory Specialist',
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Excellence in Pulmonology',
      description: 'Recognized for outstanding contributions to respiratory medicine',
    },
    {
      icon: BookOpen,
      title: '50+ Research Publications',
      description: 'Published in leading medical journals worldwide',
    },
    {
      icon: Users,
      title: '10,000+ Patients Treated',
      description: 'Successfully helped patients breathe better',
    },
  ];

  const timeline = [
    {
      year: '2005',
      title: 'Medical Degree',
      description: 'Graduated with honors in Medicine',
    },
    {
      year: '2010',
      title: 'Specialization',
      description: 'Completed MD in Pulmonary Medicine',
    },
    {
      year: '2012',
      title: 'International Fellowship',
      description: 'Advanced training in respiratory care',
    },
    {
      year: '2015',
      title: 'Founded Pulmo One',
      description: 'Established dedicated lung care center',
    },
    {
      year: '2020',
      title: 'Expanded Services',
      description: 'Added comprehensive allergy testing',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={doctorPortrait}
                      alt="Dr. Jaimin Patel - Portrait"
                      className="rounded-2xl shadow-strong w-full"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={clinicDoctorDesk}
                      alt="Dr. Jaimin Patel at Pulmo One Clinic"
                      className="rounded-2xl shadow-strong w-full"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={clinicPatientConsultation}
                      alt="Dr. Jaimin Patel consulting with patients"
                      className="rounded-2xl shadow-strong w-full"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="animate-fade-in-up">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
                Meet Dr. Jaimin Patel
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                MD, MBBS | Board-Certified Pulmonologist & Allergy Specialist
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of dedicated experience in pulmonology and allergy care, Dr. Jaimin Patel has established himself as a leading expert in respiratory medicine. His patient-centered approach combines cutting-edge medical knowledge with compassionate care.
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Mission Statement
                  </h3>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "My mission is to help every patient breathe better and live fuller lives. I believe in treating not just the condition, but the whole person, with empathy, expertise, and evidence-based care."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Education & Qualifications
            </h2>
            <p className="text-muted-foreground text-lg">
              World-class training from prestigious medical institutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up">
            {education.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">{item.year}</p>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Professional Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              A career dedicated to advancing respiratory care
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 pb-12 last:pb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <Card className="flex-1 border-border hover:shadow-medium transition-shadow mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Awards & Recognitions
            </h2>
            <p className="text-muted-foreground text-lg">
              Honored for excellence in respiratory medicine and patient care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up">
            {achievements.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Hospital Affiliations
            </h2>
            <p className="text-muted-foreground text-lg">
              Serving at leading healthcare institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in-up">
            {affiliations.map((affiliation, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-medium">{affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="border-border shadow-medium">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                      Research & Publications
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Dr. Jaimin Patel has made significant contributions to the field of respiratory medicine through extensive research and publications in peer-reviewed journals. His work focuses on innovative treatment approaches for chronic respiratory conditions and advancing patient care protocols.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pl-22">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-foreground">Published in International Journal of Respiratory Medicine</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-foreground">Presented at Global Pulmonology Conferences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-foreground">Contributing Editor for Respiratory Care Journal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
