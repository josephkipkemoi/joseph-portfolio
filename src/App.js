
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header.jsx'

function App() {
  return (
    <div>
      <HeaderComponent/>
	<HomeComponent/>
    </div>
  );
}
const HomeComponent = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        👋 Hi, I’m Joseph Kipkemoi — Software Developer
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        With over 5 years of experience crafting robust, user-focused digital solutions, I specialize in JavaScript, PHP (Laravel), Python (Django), and Go. I’m passionate about building scalable web applications that solve real-world problems.
      </p>
      <p className="mt-4 text-gray-600 text-center">
        Explore my projects, learn more about my skills, or connect with me on GitHub and LinkedIn.
      </p>
    </section>
  );
};
export default App;
