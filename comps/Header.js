import Link from "next/link";

function Header() {
    return ( <>
                <div>
                    <h1>Net Ninja</h1>
                </div>
                <nav>
                    <Link href='/'>Home</Link> || 
                    <Link href='/about'>About</Link> || 
                    <Link href='/info/detail'>Details</Link> || 
                    <Link href='/contact'>Contact</Link>
                </nav>
                <hr/>
            </> );
}

export default Header;