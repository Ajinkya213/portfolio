
const Navbar = () =>{
    return(
        <nav class="mt-5 flex justify-center">
        <ul class="flex gap-4 rounded-full bg-white px-3 py-2 text-xs font-light shadow sm:text-xs md:px-4 md:text-sm">
          <li class="rounded-full px-3 py-2 transition ease-in hover:ring hover:ring-green-500"><a href="">About Me</a></li>
          <li class="rounded-full px-3 py-2 transition ease-in hover:ring hover:ring-green-500"><a href="">Tech Stack</a></li>
          <li class="rounded-full px-3 py-2 transition ease-in hover:ring hover:ring-green-500"><a href="">Projects</a></li>
        </ul>
      </nav>
    )
}

export default Navbar