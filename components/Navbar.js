import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <a href="#">Logo</a>
            </div>
            
            <div className="navbar">
                <ul className="nav">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}