const FeaturedCard = ({image,title}) => {
  return (
    <div>
      <div className="mt-4 max-w-md rounded-lg bg-gray-100 shadow-2xl dark:bg-gray-900">
        <div className="text-sm font-medium text-gray-400">
          <img
            className="w-full rounded-t-lg"
            src={image}
          />
        </div>
        <div className="relative flex w-full items-center self-center overflow-hidden px-5 py-5 text-gray-600 focus-within:text-gray-400">
          <img
            className="mr-2 h-12 w-12 cursor-pointer rounded-full border-2 border-amber-400 object-cover shadow"
            alt="User avatar"
            src={image}
          />
          <span className="text-2xl font-bold">{title}</span>
          <span className="absolute right-6 flex h-8 w-8 cursor-pointer items-center rounded-full bg-amber-500/40 p-1 text-amber-400 backdrop-blur-md transition duration-300 ease-out hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
