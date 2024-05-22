const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[20%] px-4 md:px-20 text-white bg-gradient-to-r from-black ">
      <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-justify">
        {overview}
      </p>
      <div>
        <button className=" bg-white text-black py-1 my-2 md:py-4 px-2 md:px-10 text-lg  md:text-xl rounded-md hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-45 rounded-md hover:bg-opacity-80 ">
          ‼️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
