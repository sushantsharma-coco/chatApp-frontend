import SearchInput from "./searchInput";
import Conversations from "./conversations";
import Logout from "./logout";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar sticky py-2 px-1.5 left-0 top-0 flex h-screen flex-col gap-2 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-gray-700 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <SearchInput />

      <div className="divider w-full h-[0.5px] bg-slate-500 px-3" />

      <Conversations />

      <Logout />
    </section>
  );
};

export default LeftSideBar;
