import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/data/posts";
import { Badge } from "./ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-blog-card-shadow hover:-translate-y-1 transition-all duration-300">
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
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

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
