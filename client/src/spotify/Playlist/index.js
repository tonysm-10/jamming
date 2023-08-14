import './index.css';

const Playlist = ({inputHandle, savePlaylist, playlist, deleteFromPlaylist }) => {
  return (
    <div className='playlist'>
      {playlist.length > 0 && (
        <div className='savePlaylist'>
          <input onChange={inputHandle} placeholder='name' />
          <button onClick={savePlaylist}>Save To Playlist</button>
        </div>
      )}

      {playlist.map((track, index) => (
        <div className='item' key={index}>
          <img 
            className="img"
            src={track.image} 
            alt={`${track.artist} - ${track.song}`} 
          />
          <div className='flex'>
            <div className="flex-item">
              <p>Artist: {track.artist}</p>
              <p>Song: {track.song}</p>
            </div>
            <button className={playlist.length > 0 ? 'btn2': 'button'} onClick={() => deleteFromPlaylist(track)}>Delete from Playlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playlist;

