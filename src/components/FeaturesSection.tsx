
import React from 'react';
import { 
  Code, 
  Settings, 
  Users, 
  Book, 
  Video, 
  Bot, 
  MessageSquare,
  BookOpen,
  Award,
  Medal,
  Clock,
  LucideIcon
} from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-gradient-to-r from-codenest-cyan/20 to-codenest-purple/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-gradient" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "All-in-One Coding Environment",
      description: "Support for multiple programming languages with real-time execution and debugging tools."
    },
    {
      icon: Book,
      title: "Comprehensive Learning System",
      description: "Track progress, earn certificates, and access a rich library of downloadable resources."
    },
    {
      icon: Video,
      title: "Virtual Classroom Tools",
      description: "Video conferencing, screen sharing, and interactive whiteboard for immersive online learning."
    },
    {
      icon: Bot,
      title: "AI-Powered Assistance",
      description: "Instant answers to coding questions with our advanced AI chatbot tutor."
    },
    {
      icon: Users,
      title: "Collaborative Community",
      description: "Forums, peer code reviews, and group project workspaces linked to Git repositories."
    },
    {
      icon: Settings,
      title: "Analytics Dashboard",
      description: "Personalized insights for both students and teachers to track learning progress."
    }
  ];

  return (
    <section className="relative py-20 bg-codenest-black">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-codenest-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-codenest-black to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Powerful Features for <span className="text-gradient">Modern Learning</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            Our platform combines cutting-edge technology with educational expertise to create the ultimate coding learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={300 + (index * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
