import React from "react";
import './index.css';

const List = ({ openPreviewInNewTab, list, onExit }) => {
  return (
    <div className="playlist-page">
      <button onClick={onExit}>Exit</button>
      <h1>Your Playlists</h1>
      {list.length > 0 ? (
        list.map((playlist, index) => (
          <div className='page' key={index}>
            <h2>Playlist Name: {playlist.name}</h2>
            {playlist.tracks.length > 0 ? (
              <div className='all-playlist-container'>
                {playlist.tracks.map((track, trackIndex) => (
                  <div className='all-playlist' key={trackIndex}>
                    <img src={track.image} alt="Album Cover" />
                    <p>Artist: {track.artist}</p>
                    <p>Song: {track.song}</p>
                    <button onClick={() => openPreviewInNewTab(track.preview)}>Play ▶️</button>
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
