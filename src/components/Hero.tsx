import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const achievements = [
    { icon: '🏆', text: 'Competition Winner', type: 'gold' },
    { icon: '📊', text: 'Google BI/DA Certified', type: 'primary' },
    { icon: '👥', text: '50+ Active Users', type: 'success' },
    { icon: '🤖', text: 'AI Innovation Expert', type: 'ai' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text-hero">Full Stack Developer</span>
                <br />
                <span className="gradient-text-ai">& AI Engineer</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Competition-winning startup founder building AI-powered solutions that serve real users
              </p>
            </div>

            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`achievement-badge ${achievement.type} scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg">{achievement.icon}</span>
                  <span>{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-ai-purple/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-success/20 via-transparent to-gold/20 rounded-2xl transform -rotate-2 scale-110"></div>
              
              {/* Image Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-hero)] border border-border/50">
                <img
                  src={heroImage}
                  alt="Professional portrait"
                  className="w-full h-auto object-cover animate-pulse-gentle"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;