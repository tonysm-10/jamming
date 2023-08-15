import React from "react";
import './index.css';

const List = ({ openPreviewInNewTab, list, onExit }) => {
  return (
    <div className="playlist-page">
      <button className="viewBtn" style={{height: '2rem', width: '4rem', fontSize: '15px'}} onClick={onExit}>Exit</button>
      <h1>SAVED MUSIC</h1>
      {list.length > 0 ? (
        list.map((playlist, index) => (
          <div className='page' key={index}>
            <h2> - {playlist.name}</h2>
            {playlist.tracks.length > 0 ? (
              <div className='all-playlist-container'>
                {playlist.tracks.map((track, trackIndex) => (
                  <div className='all-playlist' key={trackIndex}>
                    <img src={track.image} alt="Album Cover" />
                    <p>Artist: {track.artist}</p>
                    <p>Song: {track.song}</p>
                    {track.preview && (
                      <audio style={{maxWidth: '14em', marginBottom: '1rem'}} controls controlsList="nodownload">
                          <source src={track.preview} type="audio/mpeg" />
                          Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No tracks found in this playlist!</p>
            )}
          </div>
        ))
      ) : (
        <p>No playlists found!</p>
      )}
    </div>
  );
};

export default List;
