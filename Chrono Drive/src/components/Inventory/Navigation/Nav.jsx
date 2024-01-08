import { HeartIcon, ShoppingBagIcon, UserPlus2 } from "lucide-react";
import Container from "../../container/Container";

const Nav = ({ handleInputChange, query }) => {
  return (
    <Container>
      <nav className="flex border-b-2 border-b-[#f3f3f3] justify-around items-center p-5 ml-8">
        <div>
          <input
            className="h-10 w-full mr-5 text-black rounded-md border border-red-700 bg-transparent px-5 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search cars.."
          />
        </div>
        <div className="flex">
          <a href="#">
            <HeartIcon className="w-6 h-6 ml-8 text-red-700" />
          </a>
          <a href="">
            <ShoppingBagIcon className="w-6 h-6 ml-8 text-red-700" />
          </a>
          <a href="">
            <UserPlus2 className="w-6 h-6 ml-8 text-red-700" />
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
