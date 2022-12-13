import { asset, Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";
import { Button } from "../components/Button.tsx";
import { Hero } from "../components/Hero.tsx";
import { Link } from "../components/Link.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <main class="bg-black">
        <Navbar />
        <Hero>
          Hey there, I'm nightly, who likes{" "}
          <Link link="/">programming and gaming.</Link>
        </Hero>
        <Hero>
          Currently working on:
          <Link link="/">this website</Link>
        </Hero>
        <Footer>
          <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem] space-x-10">
            <Button
              link="https://discord.com/users/693747573105885205"
              name="Discord"
            />
            <Button
              link="https://open.spotify.com/user/nhfvem1bkwfjk5zvgmko21phu"
              name="Spotify"
            />
          </div>
          <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem] space-x-10">
            <Button name="GitHub" link="https://github.com/dhairy-online" />
            <Button name="Twitter" link="https://twitter.com/dhairy_online" />
          </div>
        </Footer>
      </main>
    </>
  );
}
