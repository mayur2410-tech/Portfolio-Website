// @flow strict
'use client';

import { useState, useEffect } from 'react';
import { fetchYouTubeVideos } from '@/utils/youtube-api';
import VideoCard from './video-card';
import { FaYoutube } from 'react-icons/fa';

function YouTube() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasLoaded) {
          loadVideos();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('youtube');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasLoaded]);

  const loadVideos = async () => {
    setLoading(true);
    setHasLoaded(true);
    const fetchedVideos = await fetchYouTubeVideos(9);
    setVideos(fetchedVideos);
    setLoading(false);
  };

  return (
    <div id="youtube" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            <FaYoutube className="text-red-500" />
            YouTube Videos
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#16f2b3]"></div>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <FaYoutube className="text-6xl mx-auto mb-4 text-red-500" />
            <p className="text-xl">No videos available</p>
          </div>
        )}
      </div>

      {/* View More Link */}
      {videos.length > 0 && (
        <div className="flex justify-center mt-12">
          <a
            href={`https://www.youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FaYoutube />
            View More on YouTube
          </a>
        </div>
      )}
    </div>
  );
}

export default YouTube;