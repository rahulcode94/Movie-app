import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Navbar from "./components/Navbar"
import MovieProvider from "./contexts/MovieContext"


const App = () => {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-zinc-950 text-slate-100">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

        </main>
      </div>
    </MovieProvider>
  )
}

export default App
