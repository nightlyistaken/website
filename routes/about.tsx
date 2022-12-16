import { asset, Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Hero } from "../components/Hero.tsx";
import { Link } from "../components/Link.tsx";
import { Footer } from "../components/Footer.tsx";

export default function About() {
  return (
    <>
      <Head>
        <title>subwoofer5</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-[#02040F]">
        <Hero class="sm:text-2xl">
            Hello friend :] and welcome to my about page!<br/>
            I'm subwoofer.<br/> I mostly do <span class="font-bold">Svelte, Deno, Rust and TS.</span>
            <br/>
            I currently work on <span class="font-bold">this website</span> and doing school stuff. I also make music as on youtube. 
        </Hero>
        <Hero class="sm:text-2xl">
            Fun fact: I'm <span class="bg-clip-text text-transparent bg-gradient-to-tr font-bold from-blue-200 to-red-600 ">13 years old!</span> Ik im young heh.
        </Hero>
      </body>
    </>
  );
}
