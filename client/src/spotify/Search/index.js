import './index.css'

const Search = ({viewAllPlaylist, handleChange, handleSearch, search, isLoading, results})=>{
    return( 
        <div className='searchbar-page'>
            <button className='viewBtn' onClick={viewAllPlaylist}>View All Playlist</button>
            <div className='searchbar'>
                <input style={{height: '3rem', fontSize: '.9rem'}} onChange={handleChange} placeholder="Song" />
                <button className='main-button' onClick={handleSearch}>Search</button>
                {isLoading && <p>Searching for {search}...</p>}
                {results.error && <p>Error searching: {results.error.message}</p>}
            </div>
        </div>
  
    )
}

export default Search