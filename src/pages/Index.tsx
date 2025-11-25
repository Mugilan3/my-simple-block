import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16)-theme(spacing.24))] px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Welcome to my corner of the internet</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            My Simple Blog
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A place where I share my thoughts, experiences, and learnings about web development, 
            technology, and everything in between. Join me on this journey of continuous learning and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="gap-2 text-base px-8">
              <Link to="/blog">
                <BookOpen className="h-5 w-5" />
                Explore Blog Posts
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/about">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
