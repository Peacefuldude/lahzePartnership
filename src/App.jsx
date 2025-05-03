import './App.css'
import Header from "./Components/Shared/Header/Header.jsx";

function App() {
  return (
      <div
          className="min-h-screen bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("src/assets/background.png")' }}
      >
          <div className={"relative"}>
              <Header />
          </div>

      </div>

  )
}

export default App
