function Navbar(params) {
  return (
    <>
      <nav className="border-b border-white border-opacity-10 ">
        <div className="flex flex-row items-center justify-between text-center px-32 py-4">
          <div className="text-white font-geist-bold text-2xl">Kumar</div>
          <div className="text-kmr-grey-200 flex gap-6">
            <a className=" font-geist-regular text-sm hover:text-white" href="">
              Home
            </a>
            <a
              className=" font-geist-regular text-sm  hover:text-white"
              href=""
            >
              Team
            </a>
            <a className=" font-geist-regular text-sm hover:text-white" href="">
              Contact
            </a>
          </div>
          <div className="w-[70.25px]"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
