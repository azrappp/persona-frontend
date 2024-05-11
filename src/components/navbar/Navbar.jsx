function Navbar(params) {
  return (
    <>
      <nav>
        <div className="flex flex-row items-center justify-between text-center">
          <div className="text-white font-geist-semibold font-semibold ms-8 my-4 text-2xl">
            Kumar
          </div>
          <div className="text-kmr-grey-200">
            <a
              className="m-4 font-geist-regular text-sm hover:text-white"
              href=""
            >
              Home
            </a>
            <a
              className="m-4 font-geist-regular text-sm  hover:text-white"
              href=""
            >
              Team
            </a>
            <a
              className="m-4 font-geist-regular text-sm hover:text-white"
              href=""
            >
              Contact
            </a>
          </div>
          <div></div>
        </div>
      </nav>
      <div className="line"></div>
    </>
  );
}

export default Navbar;
