import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api"; 
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); // State to hold the list of movies
    const [error, setError] = useState(null); // State to hold any error messages
    const [loading, setLoading] = useState(true); // State to indicate loading status

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies); // Set the movies state with popular movies
            } catch (err) {
                console.error(err); // Log the error to the console
                setError("Failed to load movies..."); // Set error state if fetching fails

            }
            finally {
                setLoading(false); // Set loading to false after fetching
            }
        }

        loadPopularMovies(); // Call the function to load popular movies
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const handleSearch = async(e) => {
        e.preventDefault(); // Prevent the default form submission (keeps search input after submit)
        if (!searchQuery.trim()) return; // If search query is empty, do nothing
        if (loading) return; // If already loading, do nothing
        setLoading(true); // Set loading to true while fetching
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults); // Set the movies state with search results
            setError(null); // Clear any previous error messages
        } catch (err) {
            setError("Failed to search movies..."); // Set error state if fetching fails
        } finally {
            setLoading(false); // Set loading to false after fetching
        }


        setSearchQuery(""); // Clear the search input after submission
    };

    // when a state change occurs, the entire component is re-rendered

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>} {/* Show error message if any */}


            {loading ? (
                <div className="loading">Loading...</div> // Show loading message while fetching
            ) : (
            <div className="movies-grid">
                {movies.map(
                    (movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            )}
        </div>
    );
}


export default Home;