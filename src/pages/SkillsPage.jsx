import React from "react";
import Header from "../components/header.jsx"

const skills = {
  languages: ["JavaScript", "TypeScript", "PHP", "Python", "Go", "SQL", "HTML", "CSS"],
  frameworks: [
    "React", "Next.js", "Laravel", "Django", "Flask", "Express", "Gin",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase"],
  tools: [
    "Git & GitHub", "Docker", "CI/CD", "Postman", "Linux/Unix", "Figma", "Jira", "VS Code",
  ],
  cloud: ["AWS", "Vercel", "Heroku", "Netlify", "DigitalOcean"],
};

const Section = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, i) => (
        <span
          key={i}
          className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  return (
<>
	<Header/>
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Skills</h1>
      <div className="max-w-5xl mx-auto">
        <Section title="Programming Languages" items={skills.languages} />
        <Section title="Frameworks & Libraries" items={skills.frameworks} />
        <Section title="Databases" items={skills.databases} />
        <Section title="Tools & Platforms" items={skills.tools} />
        <Section title="Cloud & Deployment" items={skills.cloud} />
      </div>
    </div>
</>
  );
};

export default SkillsPage;
