import "./Footer.scss";

export const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer>
      <nav className="footer">
        <aside className="footer__body">
          <div >
            <img src="/svg/logo.svg" alt="logo" height="24" width="24"  />
          </div>
          <hgroup className="footer__copyright" x-data="{ year: new Date().getFullYear() }">
            <span className="mx-auto mt-2 text-sm font-medium text-gray-500">
              Copyright © <span x-text="year">{year} </span>
              <a
                target="_blank"
                href="https://linkedin/in/lonzochris"
                className="footer__author"
              >
                Christopher Alonzo{" "} 
              </a>
              |
              <a
                target="_blank"
                href="https://brainstation.io"
                className="footer__author"
              >
                {" "}BrainStation
              </a>
              
            </span>
          </hgroup>
        </aside>
      </nav>
    </footer>
  );
};
