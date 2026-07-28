import { Mail, Phone, Globe, Download, Code2, Trophy } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { RESUME } from "../../data/resume";

export default function ResumeHeader() {
  const { personal } = RESUME;

  const handlePrint = () => window.print();

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "DakaraiMahisa",
      href: personal.github,
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "dakarai.dev",
      href: personal.portfolio,
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "DakaraiMahisa",
      href: personal.leetcode,
    },
    {
      icon: Trophy,
      label: "HackerRank",
      value: "DakaraiMahisa",
      href: personal.hackerrank,
    },
  ];

  return (
    <header className="border-b border-slate-300 px-6 pt-5 pb-4">
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {personal.name}
          </h1>

          <p className="text-base font-semibold text-indigo-600">
            {personal.title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-600">
            Java Backend Developer specializing in Spring Boot, React,
            PostgreSQL and enterprise application development.
          </p>

          {/* Contact Grid */}

          <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-1 text-[11px]">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                <Icon size={13} />
                <span className="font-medium">{label}:</span>
                <span className="truncate text-slate-600">{value}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Download */}

        <button
          onClick={handlePrint}
          className="print:hidden ml-6 rounded-md bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          <Download size={14} className="inline mr-1" />
          PDF
        </button>
      </div>
    </header>
  );
}
