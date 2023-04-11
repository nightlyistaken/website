import { asset, Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Hero } from "../components/Hero.tsx";
import { Link } from "../components/Link.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nightly</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-gray-300">
        <Hero class="text-opacity-90 scale-90">
          Hey there I'm nightly, and I like <Link link="/about">music</Link>
          {" "}
          and gaming. I'm mostly online on{" "}
          <Link link="https://discord.com/users/693747573105885205">
            discord
          </Link>.
        </Hero>
        <Hero class="transition-colors hover:text-opacity-80">
          Currently working on:{"  "}<Link link="/">A song</Link>
        </Hero>
        <Hero>
          You may have heard me making music as <Link link="/">Nightly</Link>
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
            <Button name="GitHub" link="https://github.com/nightlyistaken" />
            <Button name="Twitter" link="https://twitter.com/nightlyistaken" />
          </div>
        </Footer>
      </body>
    </>
  );
}
