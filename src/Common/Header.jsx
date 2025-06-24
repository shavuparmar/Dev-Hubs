
import { SiRefinedgithub } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full hidden md:block  ">
      {/* Top Info Text */}
      <div className="bg-white py-2 px-4 text-center">
        <h1 className="text-sm font-semibold hidden md:block text-gray-600">
          Welcome to Dev-Hubs. DevHubs is a developer community to help new developers create projects.
        </h1>
      </div>

      {/* Navigation Bar */}
      
      <nav className="bg-gray-300 h-16 flex items-center  justify-end ">
        <ul className="flex items-center gap-6 text-base font-medium text-gray-800 mr-5">
          <li className="cursor-pointer hover:text-blue-500"> <Link to={"/"}>Home</Link>  </li>
          <li className="cursor-pointer hover:text-blue-500"> <Link to={"/about"}>  About </Link>  </li>
          <li className="cursor-pointer hover:text-blue-500"> <Link to={"/contact"}>Contact Us </Link>  </li>
          <li>
          <Link to={"https://github.com/shavuparmar"}> <SiRefinedgithub size={34}/> </Link>
          </li>
          <li>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}
