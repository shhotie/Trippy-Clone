import Navbar from "../component/Navbar";
import Hero from "../component/Hero"
import Destination from "../component/Destination";
import Footer from "../component/Footer";
import Trip from "../component/Trip"
import homeimg from "../assets/1.jpg"
function Home() {
    return(
        <>

        <Navbar/>
            <Hero
                cName="hero"
                heroImg={homeimg}
                title="Your Journey Starts Here"
                text="Choose Your Favorite Stream"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
         <Destination/>  
        <Trip/> 
        <Footer/>
        </>
    )
}
export default Home;