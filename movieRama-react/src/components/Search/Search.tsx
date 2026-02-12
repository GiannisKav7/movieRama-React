export function Search() {
  return (
    <form className="relative flex ml-4 w-px-400 max-w-100%">
      <input
        type="search"
        placeholder="Search your movies here..."
        className="w-full text-xl border-2 border-amber-300 rounded-lg p-2 outline-none hover:border-amber-900 focus-visible:border-amber-600 "
      />
      <button className="cursor-pointer rounded-lg border-none bg-none absolute right-2 top-12% height-4/5">
        Search
      </button>
    </form>
  );
}
