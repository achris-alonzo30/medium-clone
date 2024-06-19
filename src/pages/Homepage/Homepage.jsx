import "./Homepage.scss"

import { Articles } from "../../components/Articles/Articles"
import { Footer } from "../../components/Footer/Footer"
import { HeroBlog } from "../../components/HeroBlog/HeroBlog"

export const Homepage = () => {
    return (
        <main className="homepage">
            <HeroBlog />
            <Articles />
            <Footer />
        </main>
    )
}