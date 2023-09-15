import Link from 'next/link';
import '../style/navbar.css'
import { getServerSession } from 'next-auth';
import {options} from "../app/api/auth/[...nextauth]/options"

const Navbar = async() => {
  const session =await getServerSession(options)
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/recentposts">Recent Posts</Link>
        </li>
        <li className="nav-item">
          <Link href="/myposts">My posts</Link>
        </li>
        <li className="nav-item">
          <Link href="/addpost">Add Blog</Link>
        </li>
        
       
          
          {session ? (<li className="nav-item">
            <Link href="http://localhost:3000/api/auth/signout" style={{color:'red'}}>Sign Out</Link>
          </li>) : (
            <>
          <li className="nav-item">
            <Link href="http://localhost:3000/api/auth/signin"  style={{color:'lime'}}>Sign in</Link>
          </li>
          <li className="nav-item">
            <Link href="http://localhost:3000/api/auth/signin"  style={{color:'lime'}}>Register</Link>
          </li>
          </>
          )}


      </ul>
    </nav>
  );
};

export default Navbar;