import { DarkThemeToggle, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { PiShoppingCartSimple, PiUser } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 h-[8vh] w-full container mx-auto">
      <Navbar className="bg-primary px-4 text-primary dark:bg-primary dark:text-primary md:px-10">
        <Navbar.Brand>
          <NavLink to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Bukapedia
            </span>
          </NavLink>
        </Navbar.Brand>
        <div className="flex items-center justify-center gap-x-4 md:order-2">
          <Tooltip content="Change Theme">
            <DarkThemeToggle className="text-yellow-300 dark:text-primary dark:hover:bg-transparent" />
          </Tooltip>
          <Tooltip content="Cart">
            <div className="relative">
              <NavLink to="/cart">
                <span className="absolute -right-2.5 -top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-[#0f100f]">
                  0 {/* Cart Length */}
                </span>
                <PiShoppingCartSimple size={28} />
              </NavLink>
            </div>
          </Tooltip>
          {/* TODO: when user not logged in, show login button*/}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Tooltip content="Profile">
                <PiUser size={28} />
              </Tooltip>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green {/* Username */}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
};
