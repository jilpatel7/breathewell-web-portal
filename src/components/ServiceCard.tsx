import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ id, icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Link to={`/services/${id}`}>
      <Card className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50 cursor-pointer h-full">
        <CardContent className="p-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {description}
          </p>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
