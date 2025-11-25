import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <Button asChild variant="ghost" className="gap-2 -ml-2">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Button>

          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              {post.category && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed space-y-4"
              style={{ whiteSpace: 'pre-line' }}
            >
              {post.content}
            </div>
          </div>

          <div className="pt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
