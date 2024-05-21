function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="border-b border-white border-opacity-10 bg-black w-full">
        <div className="flex flex-row items-center justify-between text-center px-8 md:px-32 py-4">
          <div className="text-white font-geist font-bold text-2xl w-20">Kumar</div>
          <div className="hidden text-kmr-grey-200 md:flex gap-6 pr-20 flex-1 justify-center">
            <a className="font-geist text-sm hover:text-white" href="/">
              Home
            </a>
            <a className="font-geist text-sm hover:text-white" href="/">
              Team
            </a>
            <a className="font-geist text-sm hover:text-white" href="">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
