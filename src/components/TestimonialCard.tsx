import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  condition: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, condition, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border hover:shadow-medium transition-shadow duration-300">
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-sm text-foreground leading-relaxed mb-6 italic">
          "{text}"
        </p>

        {/* Patient Info */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
            <span className="text-white font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{condition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
