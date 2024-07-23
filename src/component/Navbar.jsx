
const Navbar = () =>{

  const links = ["About Me", "Tech Stack", "Projects"];

    return(
        <nav className="mt-5 flex justify-center">
        <ul className="flex gap-4 rounded-full bg-white px-3 py-2 text-sm font-light shadow sm:text-xs md:px-4 md:text-sm lg:text-base">
          {
            links.map(item => <li key={item} className="rounded-full px-3 py-2 transition ease-in hover:ring hover:ring-green-500"><a href="">{item}</a></li>)
          }
        </ul>
      </nav>
    )
}

export default Navbar