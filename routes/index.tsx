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
        <Hero class="text-opacity-90 scale-90">
          Hey there I'm subwoofer, and I like{" "}
          <Link link="/about">programming</Link> and gaming.
        </Hero>
        <Hero class="transition-colors hover:text-opacity-80">
          Currently working on:
          <Link link="">this website</Link>
        </Hero>
        <Hero>
          You may have heard me making music as{" "}
          <Link link="/">subwoofer5</Link>
        </Hero>
        <Footer>
          <div class="text-white text-sm sm:text-6xl sm:max-w-[43rem] space-x-10">
            <Button
              link="https://discord.com/users/693747573105885205"
              name="Discord"
            />
            <Button
              link="/about"
              name="About "
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
