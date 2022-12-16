import { asset, Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Hero } from "../components/Hero.tsx";
import { Link } from "../components/Link.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>subwoofer5</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-[#02040F]">
        <Hero>
          Hey there I'm subwoofer, who likes{" "}
          <Link link="/">programming</Link> and gaming.
        </Hero>
        <Hero>
          Currently working on:
          <Link link="/">this website</Link>
        </Hero>
        <Footer>
          <div class="text-white text-sm sm:text-6xl sm:max-w-[43rem] space-x-10">
            <Button
              link="https://discord.com/users/693747573105885205"
              name="Discord"
            />
            <Button
              link="https://open.spotify.com/user/nhfvem1bkwfjk5zvgmko21phu"
              name="Spotify"
            />
          </div>
          <div class="text-white text-sm sm:text-6xl sm:max-w-[43rem] space-x-10">
            <Button name="GitHub" link="https://github.com/subwoofer5" />
            <Button name="Twitter" link="https://twitter.com/subwoofer5_" />
          </div>
        </Footer>
      </body>
    </>
  );
}
