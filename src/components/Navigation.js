import Link from 'next/link';

export default function Navigation({page}) {
    console.log(page);
    if (page == 'about') {
        return (
            <header>
                <nav>
                    <Link href="/"><h1>SANDWICH TALK</h1></Link>
                    <Link href="/about" className='pad selected'>About</Link>
                    <Link href="/contact" className='pad'>Contact</Link>
                </nav>
            </header>
        )
    }
    else if (page == 'contact') {
        return (
            <header>
                <nav>
                    <Link href="/"><h1>SANDWICH TALK</h1></Link>
                    <Link href="/about" className='pad'>About</Link>
                    <Link href="/contact" className='pad selected'>Contact</Link>
                </nav>
            </header>
        )
    }
    else {
        return (
            <header>
                <nav>
                    <Link href="/"><h1>SANDWICH TALK</h1></Link>
                    <Link href="/about" className='pad'>About</Link>
                    <Link href="/contact" className='pad'>Contact</Link>
                </nav>
            </header>
        )
    }
}