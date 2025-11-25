import { NavLink } from "./NavLink";
import { Home, BookOpen, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            My Simple Blog
          </NavLink>
          
          <div className="flex gap-1">
            <NavLink
              to="/"
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
              activeClassName="!text-primary bg-primary/10 font-medium"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </NavLink>
            
            <NavLink
              to="/blog"
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
              activeClassName="!text-primary bg-primary/10 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Blog</span>
            </NavLink>
            
            <NavLink
              to="/about"
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
              activeClassName="!text-primary bg-primary/10 font-medium"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
