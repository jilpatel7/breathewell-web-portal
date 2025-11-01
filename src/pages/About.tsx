import { GraduationCap, Award, BookOpen, Heart, Building2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import doctorPortrait from '@/assets/doctor-jaimin-patel.jpg';
import clinicDoctorDesk from '@/assets/clinic-doctor-desk.jpg';
import clinicPatientConsultation from '@/assets/clinic-patient-consultation.jpg';

const About = () => {
  const education = [
    {
      degree: 'M.B.B.S',
      institution: 'Government Medical College, Vadodara',
      year: 'March 2017',
      university: 'Maharaja Sayajirao University of Baroda (MSU)',
      percentage: '59%',
    },
    {
      degree: 'M.D. (Respiratory Medicine)',
      institution: 'Surat Municipal Institute of Medical Education and Research (SMIMER)',
      year: 'July 2021',
      university: 'Veer Narmad South Gujarat University (VNSGU)',
      percentage: '74.4% (GOLD MEDALIST)',
      highlight: true,
    },
    {
      degree: 'Fellowship in Bronchoscopy',
      institution: 'Tata Memorial Hospital, Parel, Mumbai',
      year: 'September 2021',
      description: 'Basic bronchoscopy procedures',
    },
    {
      degree: 'FAAI (Fellowship in Allergy, Asthma and Immunotherapy)',
      institution: 'Vydehi Institute of Medical Sciences & Research Centre, Bangalore',
      year: 'December 2021',
    },
    {
      degree: 'Fellowship in Echocardiography',
      institution: 'CIMS Hospital, Ahmedabad',
      year: 'April 2022',
      description: '2-D Echo certification',
    },
    {
      degree: 'Fellowship in Advanced Interventional Pulmonology',
      institution: 'Poona Hospital and Research Centre, Pune',
      year: 'October 2022',
      description: 'School of Interventional Pulmonology under Dr. Nitin Abhyankar',
    },
  ];

  const certifications = [
    {
      title: 'Respiratory Allergy & Immunotherapy Training',
      institution: 'Vallabhbhai Patel Chest Institute (VPCI), Delhi',
      year: 'May 2022',
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
      title: 'Dr. K.S. Rao Award',
      description: 'For Securing Highest Rank in MD Respiratory Medicine Examination in entire Gujarat, 2021',
      highlight: true,
    },
    {
      icon: BookOpen,
      title: 'Research Publication',
      description: '"A study of resolution of chest X-ray (PA View) opacity in community acquired pneumonia" - NATCON 2020, Published in IJSR (2021)',
    },
    {
      icon: Users,
      title: 'Extensive Clinical Experience',
      description: '1.5 years COVID-19 ICU/Ward experience, 3 years Resident Doctor, 6+ months ICU Registrar',
    },
  ];

  const timeline = [
    {
      year: '2017',
      title: 'Medical Degree (M.B.B.S)',
      description: 'Government Medical College, Vadodara - MSU',
    },
    {
      year: '2018-2021',
      title: 'Resident Doctor',
      description: 'Respiratory Medicine Department at SMIMER, Surat (3 years) including 1.5 years COVID-19 ICU, ward and OPD experience',
    },
    {
      year: '2021',
      title: 'M.D. Respiratory Medicine (Gold Medalist)',
      description: 'SMIMER / VNSGU, Gujarat - Secured Highest Rank in entire Gujarat',
    },
    {
      year: '2021',
      title: 'Fellowship in Bronchoscopy',
      description: 'Tata Memorial Hospital, Mumbai - Basic bronchoscopy procedures',
    },
    {
      year: '2021',
      title: 'FAAI Fellowship',
      description: 'Vydehi Institute, Bangalore - Allergy, Asthma and Immunotherapy',
    },
    {
      year: '2021-2022',
      title: 'Senior Residency',
      description: 'SOLA Civil Hospital, Ahmedabad (1 year)',
    },
    {
      year: '2022',
      title: 'Advanced Training',
      description: 'Fellowship in Echocardiography at CIMS Hospital, Ahmedabad & Certified Training in Respiratory Allergy at VPCI, Delhi',
    },
    {
      year: '2022',
      title: 'Advanced Interventional Pulmonology',
      description: 'Fellowship at Poona Hospital & Research Centre, Pune under Dr. Nitin Abhyankar',
    },
    {
      year: 'Present',
      title: 'Pulmo One Lung Care & Allergy Center',
      description: 'Providing comprehensive respiratory and allergy care services',
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
                MD (Respiratory Medicine), MBBS, FAAI | Gold Medalist
              </p>
              <p className="text-lg text-muted-foreground font-medium mb-4">
                Board-Certified Pulmonologist | Interventional Pulmonology | Allergy & Asthma Specialist
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Jaimin Patel is a highly accomplished pulmonologist with extensive training in advanced interventional pulmonology, allergy, and critical care. As a Gold Medalist in MD Respiratory Medicine, he brings exceptional expertise in managing complex respiratory conditions, performing advanced bronchoscopic procedures, and providing comprehensive allergy care.
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
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Basic Education */}
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
              {education.slice(0, 2).map((item, index) => (
                <Card key={index} className={`border-border hover:shadow-strong transition-all ${item.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium flex-shrink-0">
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-primary font-bold mb-1">{item.year}</p>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-foreground font-medium mb-1">{item.institution}</p>
                        {item.university && (
                          <p className="text-xs text-muted-foreground mb-1">{item.university}</p>
                        )}
                        {item.percentage && (
                          <p className={`text-sm font-bold mt-2 ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                            {item.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Advanced Fellowships */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
                Advanced Fellowships & Specializations
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {education.slice(2).map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                    <CardContent className="p-5">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs text-primary font-semibold mb-2 text-center">{item.year}</p>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-2 text-center leading-snug">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-muted-foreground text-center mb-1">{item.institution}</p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground text-center italic mt-2">{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
                Additional Certifications
              </h3>
              <div className="max-w-2xl mx-auto">
                {certifications.map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-base text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.institution}</p>
                          <p className="text-xs text-primary font-semibold mt-1">{item.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
              Awards & Publications
            </h2>
            <p className="text-muted-foreground text-lg">
              Recognized for academic excellence and contributions to medical research
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up">
            {achievements.map((item, index) => (
              <Card key={index} className={`border-border hover:shadow-strong transition-all text-center ${item.highlight ? 'ring-2 ring-primary/30 bg-gradient-subtle' : ''}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-medium ${item.highlight ? 'bg-gradient-primary animate-scale-in' : 'bg-gradient-primary'}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.highlight && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-xs text-primary font-bold">🏆 Highest Rank in Gujarat</p>
                    </div>
                  )}
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
                      Dr. Jaimin Patel has contributed to medical research through publications in peer-reviewed journals and presentations at national conferences. His research focuses on improving diagnostic and treatment approaches for respiratory conditions.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pl-22">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">"A study of resolution of chest X-ray (PA View) opacity in community acquired pneumonia"</span> - Presented at NATCON 2020
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-foreground">Published in IJSR - International Journal of Scientific Research (2021)</p>
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
