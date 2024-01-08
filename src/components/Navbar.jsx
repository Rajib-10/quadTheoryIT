import { PiUserBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className="lg:w-[80%] mx-auto p-2 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">pti.</h1>
        </div>

        <div className="flex items-center justify-center">
          <fieldset className="w-full space-y-1">
            <label className="hidden">Search</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-[#FE8F7B]"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search Audiobook"
                className=" py-2 pl-7 lg:pl-10 text-sm rounded-md w-[150px] lg:w-[400px]"
              />
            </div>
          </fieldset>

          {/* dropdown  */}
          <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary className="bg-white pr-6">
            Menu
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none lg:w-[140px]">
            <li className="hover:text-[#F9732F]"><a>Home</a></li>
            <li className="hover:text-[#F9732F]"><a>Details</a></li>
            <li className="hover:text-[#F9732F]"><a>Category</a></li>
            <li className="hover:text-[#F9732F]"><a>My Favorites</a></li>
            <li className="hover:text-[#F9732F]"><a>Profile</a></li>
            <li className="hover:text-[#F9732F]"><a>Log In/ Sign</a></li>
          </ul>
        </details>
      </li>
    </ul>
        </div>

        <div className="bg-[#FD6011] rounded-full p-3 hidden lg:block">
            <PiUserBold className="text-white " size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
