import { createContext, useEffect, useState } from "react"

export const MovieContext = createContext()

const MovieProvider = ({ children }) => {
    const [favorite, setFevorite] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFevorite(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorite))

    }, [favorite])

    const addToFavorites = (movie) => {
        setFevorite(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFevorite(prev => prev.filter(movie => movieId !== movie.id))
    }

    const isFavorite = (movieId) => {
        return favorite.some(movie => movie.id === movieId)
    }


    const value = {
        favorite,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider