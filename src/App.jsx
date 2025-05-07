import './App.css'
import Header from "./Components/Shared/Header/Header.jsx";
import Footer from "./Components/Shared/Footer/Footer.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";

function App() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-between lg:bg-[url('./src/assets/background.png')]"
            // style={{backgroundImage: 'url("src/assets/backgroundkk(3).png")'}}
        >
            <Header/>
            <HomePage/>
            <Footer/>

        </div>

    )
}

export default App
