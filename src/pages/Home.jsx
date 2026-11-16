import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from "../services/api"



const Home = () => {

  const [searchQuery, setSearchQuery] = useState('')
  //const normalizedQuery = searchQuery.trim().toLowerCase()
  const [movies, setMovies] = useState([])

  // const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().startsWith(normalizedQuery))

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);


  const handleSearch = async(e) => {
    e.preventDefault()
    if(!searchQuery.trim())return
    if(loading) return

    setLoading(true)

    try {
      const searchResult = await searchMovies(searchQuery)

      setMovies(searchResult)
      setError(null)
    } catch (error) {
      console.log(error)
      setError("Failed to search movies...")
      
    }finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">Find your next favorite</p>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Movies for every mood.</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">Search the collection and keep the stories you love close.</p>


        <form onSubmit={handleSearch} className="mx-auto mt-7 flex max-w-xl gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-2 shadow-2xl shadow-black/20 focus-within:border-red-400/50">
          <input type="search" placeholder="Search for movies..." aria-label="Search for movies" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500 sm:px-4 sm:text-base" />
          <button type="submit" className="shrink-0 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Search</button>
        </form>
      </section>

      <section className="mt-12 sm:mt-16">

        <div className="mb-5 flex items-end justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">The collection</p><h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">Popular picks</h2></div>
         
        </div>
        {error && <div >{error}</div>}

        {loading ? 
        <div className="">Loading...</div> :
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div> 
      }
        
        
        
{!loading && !movies &&
         <p className="rounded-2xl border border-dashed border-white/15 px-4 py-12 text-center text-sm text-slate-400">No movies match “{searchQuery}”. Try another title.</p>
}


      </section>
    </div>
  )
}

export default Home
