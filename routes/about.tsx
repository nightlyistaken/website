import { asset, Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Hero } from "../components/Hero.tsx";
import { Link } from "../components/Link.tsx";
import { Footer } from "../components/Footer.tsx";

export default function About() {
  return (
    <>
      <Head>
        <title>Nightly</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-gray-300">
        <Hero class="sm:text-2xl">
          Hello friend :] and welcome to my about page!<br />
          I'm nightly.<br /> I mostly do <Link>Svelte, Deno, Rust and TS.</Link>
          <br />
          I currently work on this website and doing school stuff. I also make
          {" "}
          <Link>music as on youtube.</Link>
        </Hero>
        <Hero class="sm:text-2xl">
          Fun fact: I'm{" "}
          <span class="bg-clip-text text-transparent bg-gradient-to-tr font-bold from-blue-500 to-blue-900 ">
            13 years old!
          </span>{" "}
          Ik im young heh.
        </Hero>
      </body>
    </>
  );
}
