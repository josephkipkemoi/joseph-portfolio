import React from "react";
import Header from "../components/header.jsx";

const projects = [
  {
    title: "Ecommerce Application (ICM)",
    stack: "React, Flask, PostgreSQL",
	url_link:"www.icm.co.ke"
  },
  {
    title: "SportsBetting Backend API",
    stack: "Laravel, PostgreSQL",
	url_link:"github.com/josephkipkemoi"
  },
  {
    title: "SportsBetting Frontend",
    stack: "React, Redux, Bootstrap",
url_link:"github.com/josephkipkemoi"
  },
  {
    title: "Mental Health Awareness Website",
    stack: "React, Express, MongoDB, Bootstrap",
url_link:"github.com/josephkipkemoi"
  },
  {
    title: "Rift Insurance Nakuru Web Application",
    stack: "React, Gin, Laravel, Flask, PostgreSQL, MongoDB, TailwindCSS",
url_link:"github.com/josephkipkemoi"
  },
];

const ProjectsPage = () => {
  return (
<>
	<Header/>
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {project.title}
            </h2>
            <p className="text-sm mb-3 text-gray-700">
              <span className="font-medium">Tech Stack:</span> {project.stack}
            </p>
<a href={project.url_link} target="_blank"  class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow">
  View Project
</a>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default ProjectsPage;
