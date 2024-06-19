import "./Loader.scss";

import loadingLogo from "../../../public/svg/loader.svg";

export const Loader = () => {
    return (
        <main className="loader">
            <img src={loadingLogo} alt="Loading Spinner Logo" className="loader__logo" />
            <p className="loader__text">Loading...</p>
        </main>
    )
}