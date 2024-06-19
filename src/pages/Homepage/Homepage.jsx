import "./Homepage.scss"

import { Footer } from "../../components/Footer/Footer"
import { HeroBlog } from "../../components/HeroBlog/HeroBlog"
import { Blogs } from "../../components/Blogs/Blogs"

export const Homepage = () => {
    return (
        <main className="homepage">
            <HeroBlog />
            <Blogs />
            <Footer />
        </main>
    )
}