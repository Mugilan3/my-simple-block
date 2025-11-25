import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";
import { Search } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Blog Posts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, stories, and ideas about web development and technology
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-3 rounded-lg">
            <Search className="h-4 w-4" />
            <span>Showing {posts.length} post{posts.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
