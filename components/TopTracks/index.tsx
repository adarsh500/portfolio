import React, { useEffect, useState } from 'react';
import styles from './TopTracks.module.scss';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  const fetchTopTracks = async () => {
    const res = await fetch('api/getTopTracks');
    const data = await res.json();
    console.log(data.tracks);
    setTracks(data.tracks);
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  console.log(tracks[0]);
  return (
    <div className={styles.topTracksWrapper}>
      <h2>Adarsh's Top Tracks</h2>
      <div>
        {tracks.map((track: any, id) => (
          <a class={styles.trackItem} key={id} href={track.songUrl}>
            {track.title}
          </a>
        ))}
        {/* {tracks[0]} */}
      </div>
    </div>
  );
};

export default TopTracks;
