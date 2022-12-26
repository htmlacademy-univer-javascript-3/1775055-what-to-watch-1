import { useEffect, useRef } from 'react';
import { film } from '../../types/film';


type PreviewPlayerProps = {
  filmData: film
  isPlaying: boolean
}

function PreviewPlayer({filmData, isPlaying}: PreviewPlayerProps) {
  const previewRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (previewRef.current === null) {
      return;
    }

    if (isPlaying) {
      previewRef.current.src = filmData.previewVideoLink;
      previewRef.current.play();
      return;
    }

    if (isPlaying === false) {
      previewRef.current.src = '';
    }
  }, [filmData.previewVideoLink, isPlaying]);


  return (
    <video width="280" height="175" poster={filmData.previewImage} ref={previewRef} muted/>
  );
}

export default PreviewPlayer;
