import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
        id="loading-overlay"
      >
        <div
          class="inline-block h-8 w-8 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span className="ml-4 text-white">
          Loading ...
        </span>
      </div>
    </div>
  );
};

export default Loading;
