import './App.css'
import Header from "./Components/Shared/Header/Header.jsx";
import Footer from "./Components/Shared/Footer/Footer.jsx";

function App() {
    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-between"
            style={{backgroundImage: 'url("src/assets/background.png")'}}
        >
            <Header/>
            <Footer/>

        </div>

    )
}

export default App
