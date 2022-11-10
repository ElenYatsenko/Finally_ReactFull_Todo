import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? "activeLink" : "disactiveLink"
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "activeLink" : "disactiveLink"
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "activeLink" : "disactiveLink"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? "activeLink" : "disactiveLink"
        }
      >
        Contacts
      </NavLink>
      <NavLink
        to="/todo"
        className={({ isActive }) =>
          isActive ? "activeLink" : "disactiveLink"
        }
      >
        Todo
      </NavLink>
    </nav>
  );
};

export default Menu;
