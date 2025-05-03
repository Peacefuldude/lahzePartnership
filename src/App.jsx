import './App.css'
import Header from "./Components/Shared/Header.jsx";

function App() {
  return (
      <div
          className="min-h-screen bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("src/assets/background.png")' }}
      >
          <Header />

      </div>

  )
}

export default App
