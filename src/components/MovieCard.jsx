const MovieCard = ({ movie }) => {
  function onFavoriteClick() {
    alert("clicked")
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30">
      
      <div className="relative aspect-2/3 overflow-hidden bg-linear-to-br from-zinc-800 to-zinc-900">

        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
         
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />
        <div className="absolute right-3 top-3">
          <button aria-label={`Add ${movie.title} to favorites`} onClick={onFavoriteClick} className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/45 text-xl text-white backdrop-blur transition hover:scale-105 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">♥</button>
        </div>
      </div>


      <div className="p-3.5 sm:p-4">
        <h3 className="truncate text-sm font-semibold capitalize text-white sm:text-base">{movie.title}</h3>
        <p className="mt-1 text-xs text-slate-400">{movie.release_date?.split("-")[0]}</p>
      </div>
    </article>
  )
}

export default MovieCard
