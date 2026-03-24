export const BLOG_POSTS = {
  featured: {
    id: 1,
    category: "spring",
    title: "Spring Boot Security: JWT from scratch without starter magic",
    excerpt:
      "Most tutorials use spring-boot-starter-security as a black box. Here's how to implement stateless JWT authentication from the ground up — understanding each filter chain step, token validation, and why you should care about clock skew in distributed systems.",
    tags: ["Java", "JWT", "Security"],
    readTime: "8 min read",
    date: "Jan 2025",
    featured: true,
  },

  posts: [
    {
      category: "database",
      title: "Indexing strategies that actually improved my query times by 10×",
      excerpt:
        "Composite indexes, partial indexes, and when not to index — with real EXPLAIN ANALYZE output.",
      tag: "PostgreSQL",
      meta: "6 min · Dec 2024",
    },
    {
      category: "architecture",
      title: "When microservices are the wrong answer",
      excerpt:
        "The costs nobody mentions: distributed transactions, network latency, and operational complexity at small scale.",
      tag: "Architecture",
      meta: "10 min · Nov 2024",
    },
    {
      category: "java",
      title: "Virtual threads in Spring Boot 3.2 — what changed in practice",
      excerpt:
        "Project Loom's virtual threads are now production-ready. Here's my benchmark and what surprised me.",
      tag: "Java 21",
      meta: "5 min · Oct 2024",
    },
    {
      category: "devops",
      title:
        "Multi-stage Docker builds for Spring Boot: shrinking from 800MB to 90MB",
      excerpt:
        "Step-by-step Dockerfile optimisation using layered JARs and distroless base images.",
      tag: "Docker",
      meta: "7 min · Sep 2024",
    },
    {
      category: "database",
      title:
        "MongoDB vs PostgreSQL: choosing the right tool, not the trendy one",
      excerpt:
        "A pragmatic breakdown of when document storage genuinely wins over relational models.",
      tag: "MongoDB",
      meta: "9 min · Aug 2024",
    },
    {
      category: "spring",
      title: "Testing Spring Boot applications without mocking everything",
      excerpt:
        "Using Testcontainers for real database integration tests that actually catch bugs before production.",
      tag: "Spring Boot",
      meta: "6 min · Jul 2024",
    },
  ],
};

export const BLOG_FILTERS = [
  "all",
  "java",
  "spring",
  "database",
  "devops",
  "architecture",
];
