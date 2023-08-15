import './index.css'

const Search = ({viewAllPlaylist, handleChange, handleSearch, search, isLoading, results})=>{
    const clear = ()=>{
        window.location.reload()
    }
    return( 
        <div className='searchbar-page'>
            <button className='viewBtn' onClick={viewAllPlaylist}>View All Playlist</button>
            <div className='searchbar'>
                <input style={{height: '3rem', fontSize: '.9rem'}} onChange={handleChange} placeholder="Song/Artist" />
                <button className='main-button' onClick={handleSearch}>Search</button>
                <button className='clearBtn' onClick={clear}>Clear</button>
                <h1 className='h1'>CLEAR AND SEARCH AGAIN TO UPDATE PREVIEWS</h1>
                {isLoading && <p>Searching for {search}...</p>}
                {results.error && <p>Error searching: {results.error.message}</p>}
            </div>
        </div>
  
    )
}

export default Search