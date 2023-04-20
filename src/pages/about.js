import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>
                <title>ABOUT | Sandwich Talk</title>
                <meta name="description" content="About Sandwich Talk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="about-wrap">
                <h2>ABOUT</h2>
                <p className="about">
                    This website is for all the people who have someone important in a different time zone. <br />
                    Wondering what Sandwich means? <br />
                    Well, it means you and the person in your mind are making a huge sandwich of Earth. <br />
                    I learned this from my Chilean friend. <br />
                    She said if you put a loaf on the ground in China and Chile, you can make a Earth sandwich.<br />
                    So, if you and the person are making a sandwich, this site is for you.
                </p>
                <h2>ABOUT ME</h2>
                <p className="about">
                    Hi! I&apos;m Remi from Japan, and I made this website and let me tell you my story. <br />
                    During the summer of 2021, I flied to Sweden to do my exchange studies at KTH Royal Institute of Technology in Stockholm.<br />
                    It was my first time visiting Europe and I fell in live with the city and I immediately knew I wanted to come back. <br />
                    Now I came back to Japan but luckily, I got a job in Stockholm and I&apos;m going back there. Then, I realized, this time it&apos;s not just a year living abroad.<br />
                    I don&apos;t know when I&apos;ll come back to Japan next time and I will miss people here. So, I made this website so that I always know if it&apos;s a good time to call to my friends and family in Japan.<br />
                    AND, getting to know time is not enough, I need to know the weather, if it&apos;s holiday, etc...<br />
                    So, here it is! I&apos;m still adding some features but it&apos;s coming. Let me know if you have any idea too! Thank you for reading this long :)
                </p>
            </section>
        </>
    )
}