export const PROJECTS = [
  {
    id: 1,
    featured: true,
    num: "01",
    title: "DevOps Pilot",
    tagline: "AI-powered CI/CD failure analysis",
    description:
      "An AI-powered backend service that automatically analyzes and explains CI/CD pipeline failures. " +
      "Instead of spending hours reading cryptic build logs, DevOps Pilot diagnoses the root cause, " +
      "suggests fixes, and delivers human-readable explanations — cutting pipeline debug time dramatically.",

    highlights: [
      "AI-driven root cause analysis of pipeline failures",
      "Human-readable explanations replacing raw log output",
      "REST API consumed by a React frontend dashboard",
      "Containerised with Docker for consistent environments",
    ],
    tags: [
      "Java",
      "Python",
      "Spring Boot",
      "Docker",
      "React",
      "AI/ML",
      "CI/CD",
    ],
    category: "devops",
    status: "in-progress",

    githubUrl: "https://github.com/DakaraiMahisa/devops-pilot",

    liveUrl: null,

    videoUrl: null,

    imageUrl: "/projects/devops-pilot.png",
    year: "2025",
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

    githubUrl: "https://github.com/yourusername/task-reminder",
    liveUrl: null,
    videoUrl: null,

    imageUrl: "/projects/task-reminder.png",
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
  planned: {
    label: "Planned",
    classes:
      "bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/20",
  },
};

export const CATEGORY_CONFIG = {
  all: { label: "All Projects" },
  backend: { label: "Backend" },
  devops: { label: "DevOps" },
  fullstack: { label: "Full Stack" },
  tools: { label: "Tools" },
};
