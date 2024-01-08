import { NavLink } from "react-router-dom";
export default function Footer() {
  const menuItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Inventory",
      to: "/inventory",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];
  return (
    <footer className="relative bg-black pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-light-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blue-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-red-700 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `text-md font-semibold text-sm hover:text-red-600 ${
                            isActive ? "text-red-700" : "text-white"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-red-700 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-red-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white hover:text-gray-800"
                target="_blank"
              >
                {" "}
                CHRONODRIVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}