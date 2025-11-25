export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category?: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    slug: "first-post",
    title: "My First Post",
    excerpt: "This is my first blog post, exploring the world of web development and sharing my journey.",
    content: `
# Welcome to My First Post!

This is an exciting moment - my very first blog post! I've decided to start documenting my journey in web development, and I couldn't be more thrilled to share it with you.

## Why I Started This Blog

I believe that writing about what we learn helps solidify our understanding. This blog will serve as both a learning tool for me and hopefully a helpful resource for others on similar paths.

## What to Expect

In future posts, I'll be covering:
- Web development tips and tricks
- My learning experiences
- Project showcases
- Technology reviews

Thank you for joining me on this journey. Stay tuned for more content!
    `,
    category: "Personal",
    date: "2024-01-15",
  },
  {
    slug: "learning-nextjs",
    title: "Learning Next.js",
    excerpt: "Notes about the journey of learning Next.js and building modern web applications.",
    content: `
# My Next.js Learning Journey

Next.js has revolutionized the way we build React applications. Here are my notes and observations from learning this powerful framework.

## Why Next.js?

Next.js provides several benefits out of the box:
- Server-side rendering for better SEO
- File-based routing system
- API routes for backend functionality
- Automatic code splitting
- Built-in image optimization

## Key Concepts I've Learned

### 1. App Router
The new App Router is a game-changer. It uses React Server Components by default and makes creating layouts much more intuitive.

### 2. Server Components vs Client Components
Understanding when to use each is crucial for building performant applications.

### 3. Data Fetching
Next.js offers multiple ways to fetch data, each optimized for different use cases.

## Challenges and Solutions

Like any new technology, Next.js came with its learning curve. But the documentation is excellent, and the community is incredibly helpful.

Looking forward to building more with Next.js!
    `,
    category: "Tutorial",
    date: "2024-02-10",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips",
    excerpt: "Some basic Tailwind tricks and best practices I've discovered along the way.",
    content: `
# Tailwind CSS Tips and Tricks

Tailwind CSS has become my go-to styling solution. Here are some tips I've picked up that have improved my workflow significantly.

## 1. Use the @apply Directive Sparingly

While it's tempting to use @apply for everything, it's better to embrace the utility-first approach:

\`\`\`css
/* Instead of this */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

/* Use utilities directly in your HTML */
<button className="px-4 py-2 bg-blue-500 text-white rounded">
\`\`\`

## 2. Leverage the JIT Compiler

The Just-In-Time compiler lets you use arbitrary values:

\`\`\`jsx
<div className="top-[117px]">
\`\`\`

## 3. Create a Design System

Define your colors, spacing, and typography in the Tailwind config:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
        },
      },
    },
  },
}
\`\`\`

## 4. Use Dark Mode Variants

Tailwind makes dark mode implementation simple:

\`\`\`jsx
<div className="bg-white dark:bg-gray-900">
\`\`\`

## 5. Responsive Design Made Easy

Mobile-first responsive design is intuitive with Tailwind:

\`\`\`jsx
<div className="text-sm md:text-base lg:text-lg">
\`\`\`

These tips have made my development process much faster and more enjoyable. Happy styling!
    `,
    category: "Tutorial",
    date: "2024-03-05",
  },
];
