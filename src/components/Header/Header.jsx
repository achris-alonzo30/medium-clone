import "./Header.scss";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useScrollTop } from "../../hooks/useScrollTop";

export const Header = () => {
  const scrolled = useScrollTop();
  console.log(scrolled)
  return (
    <header className={`header ${scrolled && "transparent"}`}>
      <h1 className="header__title">
        <img src="/svg/logo.svg" alt="Write Logo" width="50" height="50" />
      </h1>

      <nav className="header__nav">
        <ul className="header__lists">
          <li className="header__list">
            <button className="header__write button">
                <img src="/svg/write.svg" alt="Write Logo" width="24" height="24" className="header__write--logo"/>
                Write
            </button>
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
