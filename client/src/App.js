// import logo from './logo.svg';
import './App.css';
import List from './spotify/List/index'
import Results from './spotify/Results/index';
import { useState } from 'react';
import Search from './spotify/Search/index'
import Playlist from './spotify/Playlist/index'
// import spotifyImage from './assets/spotify.jpeg';

function App() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('')
  const [list, setList] = useState([]);
  const [playlistList, setPlaylistList] = useState([]);
  const [openSavedPlaylist, setOpenSavedPlaylist] = useState(false)

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      return;
    }

    setIsLoading(true);

    try {
      const clientId = "c690772798c540028c4779ce1aefd1e5";
      const clientSecret = "d933ec3ec68b4c0488ce4353105eedd0";

      const base64Credentials = btoa(`${clientId}:${clientSecret}`);

      const response = await fetch(
        `https://accounts.spotify.com/api/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64Credentials}`,
          },
          body: "grant_type=client_credentials",
        }
      );

      const tokenData = await response.json();
      const accessToken = tokenData.access_token;

      const searchResponse = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=track&limit=8`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const searchData = await searchResponse.json();
      setResults(searchData);
    } catch (error) {
      console.error("Error searching:", error);
    }

    setIsLoading(false);
  };
  
  const deleteFromPlaylist = (trackToRemove)=>{
    const removeFromPlaylist = playlist.filter((track => track !== trackToRemove))
    setPlaylist(removeFromPlaylist)
  }
  
  const addToPlaylist = (track) => {
    const newTrack = {
      artist: track.artists[0].name,
      song: track.name,
      image: track.album.images[0].url,
      preview: track.preview_url
    };

    setPlaylist((prevPlaylist) => [...prevPlaylist, newTrack]);
  };
  const openPreviewInNewTab = (previewUrl) => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    } else {
      alert("No preview URL available for this track.");
    }
  };

  const inputHandle = ({target})=>{
    setPlaylistName(() => target.value)
  }
  const savePlaylist = () => {
    const newPlaylist = {
      name: playlistName,
      tracks: [...playlist],
    };

    setPlaylistList((prevPlaylistList) => [...prevPlaylistList, newPlaylist]);
    setPlaylist([])
    setPlaylistName('')
  };
  console.log(list)
  const viewAllPlaylist = ()=>{
    setOpenSavedPlaylist(true)
  }
const onExit = ()=>{
  setOpenSavedPlaylist(false)
}



return (
  <div className={playlist.length > 0 ? "App" : "full-App"}>
    {openSavedPlaylist ? (
      <List openPreviewInNewTab={openPreviewInNewTab} list={playlistList} onExit={onExit} />
    ) : (
      <div>
        <Search viewAllPlaylist={viewAllPlaylist} results={results} search={search} isLoading={isLoading} handleChange={handleChange} handleSearch={handleSearch} />
        <div className="container">
          <Results openPreviewInNewTab={openPreviewInNewTab} results={results} addToPlaylist={addToPlaylist} playlist={playlist} />
          <Playlist inputHandle={inputHandle} savePlaylist={savePlaylist} playlist={playlist} results={results} deleteFromPlaylist={deleteFromPlaylist} />
        </div>
      </div>
    )}
  </div>
);
  

}

export default App;
