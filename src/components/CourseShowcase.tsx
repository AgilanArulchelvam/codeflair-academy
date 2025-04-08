
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  category: string;
  level: string;
  lessons: number;
  image: string;
  delay: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, category, level, lessons, image, delay }) => {
  return (
    <div 
      className="relative group animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-w-16 aspect-h-9 bg-codenest-dark-gray">
          <div className="neon-border rounded-xl overflow-hidden h-full">
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute top-3 left-3 bg-codenest-purple/80 text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          <span className="bg-codenest-dark-gray/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            {level}
          </span>
          <span className="bg-codenest-dark-gray/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            {lessons} lessons
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white group-hover:text-codenest-cyan transition-colors duration-200">
          {title}
        </h3>
        <Button variant="ghost" className="mt-2 px-0 text-gray-400 hover:text-codenest-cyan">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const CourseShowcase = () => {
  const courses = [
    {
      title: "Python Fundamentals for AI & Machine Learning",
      category: "Python",
      level: "Beginner",
      lessons: 42,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Advanced JavaScript & Modern Frameworks",
      category: "JavaScript",
      level: "Intermediate",
      lessons: 36,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      category: "Web Dev",
      level: "All Levels",
      lessons: 75,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Data Structures & Algorithms Masterclass",
      category: "Computer Science",
      level: "Advanced",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-codenest-black relative">
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-codenest-purple/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-codenest-cyan/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-gray-300 max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              Dive into our most popular courses designed to take your coding skills to the next level.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 animate-fade-in bg-gradient-to-r from-codenest-cyan to-codenest-purple hover:opacity-90" style={{ animationDelay: '300ms' }}>
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              category={course.category}
              level={course.level}
              lessons={course.lessons}
              image={course.image}
              delay={400 + (index * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
