'use client';

export const LoadMore = ({action, disabled}) => {
  const handleLoadMore = (e) => {
    e.preventDefault();
    action();
  }
  return (
    <div className="flex flex-row justify-center">
      <button
        className="cursor-pointer group transition duration-200 px-1 py-1 w-full sm:w-fit rounded-full group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 bg-slate-800 text-white mt-3 disabled:opacity-70"
        onClick={handleLoadMore}
      >
        <span className="block group-hover:bg-slate-900 rounded-full px-5 py-2 opacity-90 transition duration-200">
          {disabled ? "Loading" : "Load more"}
        </span>
      </button>
    </div>
  );
}