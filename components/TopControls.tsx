"use client";

import { useEffect, useRef, useState } from "react";

const songs = [
  {
    title: "Best Part (feat. H.E.R.)",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/%28LYRICS%29%20Best%20Part%20-%20Daniel%20Caesar%20ft%20H.E.R%28MP3_160K%29.mp3",
  },
  {
    title: "Get You (feat. Kali Uchis)",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/GET%20YOU%20__%20DANIEL%20CAESAR%20FT.%20KALI%20UCHIS%20%28LYRICS%29%28MP3_160K%29.mp3",
  },
  {
    title: "Blessed",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/%28LYRICS%29%20Blessed%20-%20Daniel%20Caesar%28MP3_160K%29.mp3",
  },
  {
    title: "We Find Love",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/Daniel%20Caesar%20-%20We%20Find%20Love%28MP3_160K%29.mp3",
  },
  {
    title: "Who Hurt You",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/Daniel%20Caesar%20-%20Who%20Hurt%20You_%28MP3_160K%29.mp3",
  },
  {
    title: "Death & Taxes",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/Daniel%20Caesar%20-%20Death%20_%20Taxes%28MP3_128K%29.mp3",
  },
  {
    title: "Love Again (with Brandy)",
    url: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/BRANDY%20X%20DANIEL%20CAESAR%20-%20_LOVE%20AGAIN_%20%28OFFICIAL%20LY%28MP3_160K%29.mp3",
  },
];

export default function TopControls() {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<{ title: string; url: string } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Clean up audio on unmount to prevent leaks
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playNextRandom = (prevSongUrl?: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const filteredSongs = prevSongUrl ? songs.filter((s) => s.url !== prevSongUrl) : songs;
    const randomIdx = Math.floor(Math.random() * filteredSongs.length);
    const nextSong = filteredSongs[randomIdx];
    setCurrentSong(nextSong);

    const audio = new Audio(nextSong.url);
    audio.volume = 0.45; // Premium comfortable default volume
    audio.onended = () => {
      playNextRandom(nextSong.url);
    };

    audioRef.current = audio;
    audio.play().catch((err) => console.log("Audio playback failed: ", err));
  };

  const handleToggle = () => {
    if (playing) {
      // Pause playback
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlaying(false);
    } else {
      // Start/Resume playback
      if (!audioRef.current) {
        playNextRandom();
      } else {
        audioRef.current.play().catch((err) => console.log("Audio playback failed: ", err));
      }
      setPlaying(true);
    }
  };

  return (
    <div className="top-right-controls" style={{ gap: "10px" }}>
      {playing && currentSong && (
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.05em",
            color: "var(--accent-gold)",
            fontWeight: 500,
            marginRight: "4px",
            textTransform: "uppercase",
            animation: "fadeUp 0.4s ease forwards",
          }}
        >
          ♫ {currentSong.title}
        </span>
      )}

      <button
        id="volume-toggle"
        onClick={handleToggle}
        aria-label={playing ? "Mute" : "Unmute"}
        style={{
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: 0,
          fontFamily: "inherit",
          fontSize: "inherit",
          letterSpacing: "inherit",
        }}
      >
        {!playing ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
              <path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
            <span>MUTED</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            </svg>
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>ON</span>
          </>
        )}
      </button>
    </div>
  );
}
