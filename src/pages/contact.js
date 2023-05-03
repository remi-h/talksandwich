import Head from "next/head"
import Navigation from "@/components/Navigation"

// ---navigation---
let page = 'contact';

export default function Contact() {
    return (
        <>
            <Head>
                <title>CONTACT | Sandwich Talk</title>
                <meta name="description" content="About Sandwich Talk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation page={page} />
            <section className="contact-wrap">
                <h2>CONTACT</h2>
                <p>If you have any idea, question or found a problem.</p>
                <form name="contact" method="POST" netlify>
                    <p>
                        <label>Your Name</label><input type="text" name="name" />
                    </p>
                    <p>
                        <label>Your Email</label><input type="email" name="email" />
                    </p>
                    <p>
                        <label>Message</label><textarea name="message"></textarea>
                    </p>
                        <button type="submit">Send</button>
                </form>
            </section>
        </>
    )
}