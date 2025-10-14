import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function Menu   ()  {
  return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div>
                    <h1> This is Menu page  .</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Menu 
