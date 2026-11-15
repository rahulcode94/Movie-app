const Favorites = () => {
  return (
    <section className="mx-auto max-w-4xl py-8 text-center sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Your personal collection</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Favorites</h1>
      <p className="mt-4 text-sm text-slate-400 sm:text-base">The movies you save will be waiting here.</p>
      <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-12">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-red-500/10 text-2xl text-red-400">♥</div>
        <h2 className="mt-5 font-semibold text-white">Your list is ready</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">Tap the heart on a movie to add it to your collection.</p>
      </div>
    </section>
  )
}

export default Favorites
