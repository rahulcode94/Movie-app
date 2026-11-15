import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white sm:text-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-red-500 text-sm shadow-lg shadow-red-500/20">M</span>
          <span>Movie<span className="text-red-400">Shelf</span></span>
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm font-medium">
          <Link to="/" className="rounded-full px-4 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white">Home</Link>
          <Link to="/favorites" className="rounded-full px-4 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white">Favorites</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
