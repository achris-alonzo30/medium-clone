export const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer>
      <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="flex flex-col items-baseline space-y-6">
          <div className="mx-auto">
            <img src="/svg/logo.svg" alt="logo" height="24" width="24" className="mx-auto text-lg text-center" />
          </div>
          <div className="mx-auto" x-data="{ year: new Date().getFullYear() }">
            <span className="mx-auto mt-2 text-sm font-medium text-gray-500">
              Copyright © <span x-text="year">{year}</span>
              <a
                aria-label="Michael Andreuzza"
                href="#_"
                className="mx-2 text-blue-500 hover:text-gray-500"
              >
                Christopher Alonzo
              </a>
              | BrainStation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
