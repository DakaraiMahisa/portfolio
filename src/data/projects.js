import dashboard from "../assets/projects/stockpilot/dashboard.jpg";
import app from "../assets/projects/taskreminderapp/app.png";

export const PROJECTS = [
  {
    id: 1,
    featured: true,
    num: "01",

    title: "StockPilot – SME Business Management Platform",

    tagline: "Enterprise software built for modern business operations",

    description:
      "StockPilot is a cloud-ready enterprise platform designed to help small and medium-sized businesses manage their operations from a single secure system. The platform integrates inventory, sales, organization management, user administration, taxation, and business configuration within a scalable multi-tenant architecture, while laying the foundation for future AI-powered business intelligence.",

    highlights: [
      "Secure multi-tenant architecture supporting multiple organizations",
      "JWT authentication with refresh token rotation and role-based access control",
      "Inventory, product catalog, category and stock management",
      "Organization, branch, taxation and business configuration management",
      "Modern React frontend powered by Spring Boot REST APIs",
      "Designed for future AI-driven analytics, forecasting and intelligent business insights",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Docker",
      "JWT",
      "RBAC",
      "Multi-Tenant",
    ],

    category: "fullstack",

    status: "active",

    githubUrl: "https://github.com/DakaraiMahisa/stockpilotbackend",

    liveUrl: null,

    videoUrl: null,

    imageUrl: dashboard,

    year: "2026",
  },

  {
    id: 2,
    featured: false,
    num: "02",
    title: "Task Reminder App",
    tagline: "Never miss a deadline again",
    description:
      "A full-featured task management application that helps professionals stay on top of deadlines. " +
      "Users get smart email notifications before tasks are due, visual progress insights, " +
      "and one-click report generation — downloadable as PDF or delivered straight to their inbox.",
    highlights: [
      "Email notifications via Spring Mail integration",
      "Progress dashboard with visual insights",
      "Downloadable and email-able PDF reports",
      "Clean Thymeleaf-powered server-side UI",
    ],
    tags: ["Java", "Spring Boot", "Thymeleaf", "HTML", "CSS", "Email"],
    category: "backend",
    status: "completed",

    githubUrl: "https://github.com/DakaraiMahisa/task-reminder-app",
    liveUrl: null,
    videoUrl: null,

    imageUrl: app,
    year: "2024",
  },
];

export const getFeaturedProject = () =>
  PROJECTS.find((p) => p.featured) || PROJECTS[0];

export const getOtherProjects = () => PROJECTS.filter((p) => !p.featured);

export const getByCategory = (category) =>
  category === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === category);

export const STATUS_CONFIG = {
  completed: {
    label: "Completed",
    classes:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  "in-progress": {
    label: "In Progress",
    classes:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  active: {
    label: "Actively Developed",
    classes:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  planned: {
    label: "Planned",
    classes:
      "bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/20",
  },
};

export const CATEGORY_CONFIG = {
  all: { label: "All Projects" },
  fullstack: { label: "Enterprise Applications" },
  backend: { label: "Backend Systems" },
  tools: { label: "Developer Tools" },
};
