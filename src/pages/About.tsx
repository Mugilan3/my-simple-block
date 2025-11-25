import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hi there! I'm Mugilan R a passionate web developer who loves building beautiful and functional 
              applications. This blog is my digital garden where I document my learning journey, 
              share insights, and connect with fellow developers.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                I believe in writing maintainable, well-documented code that others can understand.
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Technology evolves rapidly, and I'm committed to staying current with best practices.
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Building Projects</h3>
              <p className="text-sm text-muted-foreground">
                Nothing beats hands-on experience. I love turning ideas into real, working applications.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My development journey started with curiosity and a desire to understand how things work. 
                From building simple websites to complex web applications, each project has taught me 
                something new.
              </p>
              <p>
                I specialize in modern web technologies like React, TypeScript, and Tailwind CSS. 
                I'm particularly interested in creating exceptional user experiences and writing code 
                that's both performant and maintainable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or writing blog posts to help others on their development journey.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
