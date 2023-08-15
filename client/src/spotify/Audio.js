import { useEffect } from "react";
const Audio = ({track, handleChange, newPreview})=>{
    useEffect(() => {
        // This effect will run whenever the search button is clicked
        // No specific code is required here if you only want to trigger a re-render
      }, [track]);
return(
    <audio style={{maxWidth: '13em',}} controls controlsList="nodownload">
        <source src={track} type="audio/mpeg" />
        Your browser does not support the audio for {track}.
    </audio>
)
}

export default Audio

