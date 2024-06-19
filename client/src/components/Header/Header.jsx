import "./Header.scss";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";


export const Header = () => {
  const scrolled = useScrollTop();
  return (
    <header className={`header ${scrolled && "transparent"}`}>
      <NavLink to="/" className="header__title">
        <img src="/svg/logo.svg" alt="Write Logo" width="50" height="50" />
      </NavLink>

      <nav className="header__nav">
        <ul className="header__lists">
          <li className="header__list">
            <NavLink to="/create-article" className="header__write button">
                <img src="/svg/write.svg" alt="Write Logo" width="24" height="24" className="header__write--logo"/>
                Write
            </NavLink>
          </li>
          <li className="header__list">
            <button className="header__notification button">
                  <img src="/svg/bell.svg" alt="Bell Logo" width="24" height="24" />
            </button>
          </li>
          <li className="header__list">
            <SignedOut>
              <SignInButton className="button"/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
};
