import React from 'react';

const RestCardShimmer = () => {
  return (
    <div className="flex flex-col rounded-exrounded min-w-[250px] max-w-[320px] md:max-w-[350px] lg:max-w-[380px] w-full shadow shadow-gray-300 mb-10 animate-pulse">
      
      {/* ------------------image placeholder------------------ */}
      <div className="w-full relative h-[180px] bg-gray-200 rounded-exrounded" />

      {/* ------------------text placeholders------------------ */}
      <div className="flex flex-col px-2 pb-2 mt-3 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/2" /> {/* Tag line */}
        <div className="h-5 bg-gray-300 rounded w-3/4" /> {/* Restaurant name */}

        <div className="flex space-x-2 items-center">
          <div className="h-4 bg-gray-200 rounded w-6" />
          <div className="h-4 bg-gray-200 rounded w-12" />
          <div className="h-4 bg-gray-200 rounded w-4" />
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-10" />
        </div>

        <div className="flex space-x-2 items-center">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-4" />
          <div className="h-4 bg-gray-200 rounded w-12" />
          <div className="h-4 bg-gray-200 rounded w-10" />
        </div>
      </div>
    </div>
  );
};

export default RestCardShimmer;
