// @flow strict
import * as React from 'react';
import { useState } from 'react';
import { FaCalendar, FaYoutube } from 'react-icons/fa';

function VideoCard({ video }) {
  const [showVideo, setShowVideo] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-sm lg:text-base font-medium line-clamp-2">
          {video.title}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        {/* Video Thumbnail - Direct Display */}
        <div className="relative w-full h-48 lg:h-64 mb-4 rounded-lg overflow-hidden bg-[#0a0d37]">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setShowVideo(!showVideo)}
          />
        </div>

        {/* Video Description */}
        <p className="text-gray-300 text-sm lg:text-base mb-4 leading-relaxed line-clamp-3">
          {video.description}
        </p>

        {/* Video Date */}
        <div className="flex items-center gap-2 text-gray-400 text-xs lg:text-sm mb-4">
          <FaCalendar />
          <span>{formatDate(video.publishedAt)}</span>
        </div>

        {/* Watch on YouTube Link */}
        <div className="flex gap-4">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm lg:text-base"
          >
            <FaYoutube />
            <span>Watch on YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;