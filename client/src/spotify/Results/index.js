
import './index.css';
import Audio from '../Audio.js';

const Results = ({ playlist, results, addToPlaylist }) => {





  if (!results.tracks || !results.tracks.items || results.tracks.items.length === 0) {
    return null; 
  }

  return (
    <div className={playlist.length > 0 ? "": 'results'}>
      {results.tracks.items.map((track, index) => (
        <div className={playlist.length > 0 ? "item": 'item-full'} key={index}>
          {track.album.images.length > 0 && (
            <img
              className={playlist.length > 0 ? "img": 'img-full'}
              src={track.album.images[0].url}
              alt={track.name}
            />
          )}
          <div className={playlist.length > 0 ? "flex": 'flex-full'}>
            <div className={playlist.length > 0 ? "flex-item": 'flex-item-full'}>
              <p>Artist: {track.artists[0].name}</p>
              <p>Song: {track.name}</p>
            </div>
            {track.preview_url && (
                <Audio track={track.preview_url} />
              )}
            <div className="flex-column">
              <button className={playlist.length > 0 ? 'btn': 'button'} onClick={() => addToPlaylist(track)}>Add to Playlist</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
