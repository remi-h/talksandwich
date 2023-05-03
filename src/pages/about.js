import Head from "next/head"
import Navigation from "@/components/Navigation"

// ---navigation---
let page = 'about';

export default function About() {
    return (
        <>
            <Head>
                <title>ABOUT | Sandwich Talk</title>
                <meta name="description" content="About Sandwich Talk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation page={page} />
            <section className="about-wrap">
                <h2>ABOUT</h2>
                <p className="about">
                    This website is for all the people who have someone important in a different time zone. <br />
                    The name Sandwich is from that you and the person in your mind are making a huge sandwich of Earth. <br />
                </p>
                <h2>UPDATE</h2>
                <p className="about">
                    last update - May 4th, 2023 <br />
                    New features coming. Let me know if you have any idea!
                </p>
            </section>
        </>
    )
}