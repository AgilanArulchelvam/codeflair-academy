
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-codenest-black pb-16 pt-10 md:pt-20">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20"></div>
      
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-codenest-purple/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-codenest-cyan/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
              Where Coding Meets <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Unleash your potential with our cutting-edge coding environment. Learn, build, and collaborate in a platform designed for the modern developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-gradient-to-r from-codenest-cyan to-codenest-purple hover:opacity-90 text-white font-medium px-8 py-6">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6">
                <Play className="mr-2 h-5 w-5 text-codenest-cyan" /> Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="neon-border rounded-lg animate-float">
              <div className="bg-codenest-dark-gray rounded-lg overflow-hidden">
                <div className="bg-black/40 px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-center text-gray-400 text-sm">code-editor.js</div>
                </div>
                <div className="p-4 text-left">
                  <pre className="text-sm sm:text-base whitespace-pre font-mono">
                    <code className="language-javascript">
                      <span className="text-pink-400">function</span> <span className="text-codenest-cyan">learnToCode</span>(<span className="text-codenest-purple">passion</span>) {"{"}
                      <br />
                      {"  "}<span className="text-pink-400">if</span> (passion) {"{"}
                      <br />
                      {"    "}<span className="text-green-400">return</span> <span className="text-yellow-300">"Welcome to CodeNest!"</span>;
                      <br />
                      {"  }"} <span className="text-pink-400">else</span> {"{"}
                      <br />
                      {"    "}<span className="text-codenest-purple">passion</span> = <span className="text-codenest-cyan">buildPassion</span>();
                      <br />
                      {"    "}<span className="text-green-400">return</span> <span className="text-codenest-cyan">learnToCode</span>(<span className="text-codenest-purple">passion</span>);
                      <br />
                      {"  }"}
                      <br />
                      {"}"}
                      <br /><br />
                      <span className="text-gray-400">// Your journey begins here</span>
                      <br />
                      <span className="text-codenest-cyan">learnToCode</span>(<span className="text-yellow-300">true</span>);
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
