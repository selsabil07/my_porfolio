import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logos from '../assets/Logos.svg'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img  src={Logos}  className="mx-2 cursor-pointer" width={50} height={33} alt="logo" />
        {/* <img className="mx-2 cursor-pointer" width={50} height={33} alt="logo" type="image/svg+xml" href="/Logos.svg"/> */}
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/selsabil-djazouli-3704aa208/" 
            target="blanck"
            rel=".."
            aria-label="LinkedIn">
            <FaLinkedin />
        </a>
        <a href="https://github.com/selsabil07" 
            target="blanck"
            rel=".."
            aria-label="GitHub">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/iam_selsa/" 
            target="blanck"
            rel=".."
            aria-label="Instagram">
            <FaInstagram />
        </a>
        
      </div>
    </div>
  )
}

export default NavBar
