import React from 'react';
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommend from '../Recommend/Recommend';
import { useParams } from 'react-router-dom';

const Video = () => {
  const {categoryId, videoId} = useParams()
  return (
    <div className='play-container'>
      <PlayVideo categoryId={categoryId} videoId={videoId}/>
      <Recommend/>
    </div>
  );
}

export default Video;
