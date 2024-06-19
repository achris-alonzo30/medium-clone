import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src="/svg/logo.svg" alt="Write Logo" width="30" height="30" />
      </h1>

      <nav className="header__nav">
        <ul className="header__lists">
          <li className="header__list">
            <button className="header__write">
                <img src="/svg/write.svg" alt="Write Logo" width="30" height="30" />
                Write
            </button>
          </li>
          <li>
          <button>
                <img src="/svg/bell.svg" alt="Bell Logo" width="30" height="30" />
            </button>
          </li>
          <li>
            <SignedOut>
              <SignInButton />
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
