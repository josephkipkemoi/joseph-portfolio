import React from "react";
import Header from '../components/header.jsx';

const AboutMePage = () => {
  return (
<>
<Header/>
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m <strong>Joseph Kipkemoi</strong>, a passionate software developer with over <strong>5 years</strong> of experience building scalable and efficient digital solutions. I'm proficient in <strong>JavaScript</strong>, <strong>PHP (Laravel)</strong>, <strong>Go</strong>, and <strong>Python</strong>.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          I have extensive experience working with modern frameworks such as <strong>React</strong>, <strong>Django</strong>, and <strong>Laravel</strong>. I enjoy turning complex problems into clean, maintainable code and continuously explore new technologies to stay ahead in the industry.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect with me</h3>
          <ul className="flex gap-6 text-blue-600">
            <li>
              <a
                href="https://github.com/josephkipkemoi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/josephkipkemoi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
</>
  );
};

export default AboutMePage;
