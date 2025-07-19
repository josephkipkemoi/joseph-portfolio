import React from "react";
import Header from "../components/header.jsx"

const ContactPage = () => {
  return (
<>
<Header/>
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Me</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+254..."
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 border-t pt-6 text-gray-700">
          <h2 className="text-xl font-semibold mb-3">You can also reach me at:</h2>
          <ul className="space-y-2">
            <li><strong>Phone:</strong> <a href="tel:+254728532000" className="text-blue-600">+254728532000</a></li>
            <li><strong>Personal Email:</strong> <a href="mailto:jkemboe@gmail.com" className="text-blue-600">jkemboe@gmail.com</a></li>
            <li><strong>Work Email:</strong> <a href="mailto:joseph@riftkoders.com" className="text-blue-600">joseph@riftkoders.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/josephkipkemoi" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/josephkipkemoi</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/josephkipkemoi" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/josephkipkemoi</a></li>
          </ul>
        </div>
      </div>
    </div>
</>
  );
};

export default ContactPage;
