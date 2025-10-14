import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function Staff () {
   return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div>
                    <h1> This is staff page  .</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Staff
