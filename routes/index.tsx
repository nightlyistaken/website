import { asset, Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <div class="bg-black">
        <Navbar />
        <section class="py-24 flex items-center min-h-screen justify-center">
          <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem]">Hey there, I'm nightly, who likes <span class="underline  text-gray-300">programming and gaming.</span></div>
        </section>
        <section class="py-24 flex items-center min-h-screen justify-center">
        <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem]"> 
          <div class="flex flex-col">
            Currently working on:
            <div class="flex flex-row">
              <div>
                <a href="/" class="text-gray-300 underline">this website</a>
                </div>
              </div>
          </div>
        </div>
        </section>
        <section class="py-24 flex items-center min-h-screen justify-center flex-col space-y-14">
          <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem] space-x-10">
            <a class="bg-gray-300 text-black px-4 py-2 rounded-md  transition-colors hover:bg-black hover:text-white hover:border-b" href="https://discord.com/users/693747573105885205">Discord</a>
            <a class="bg-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white hover:border-b" href="https://open.spotify.com/user/nhfvem1bkwfjk5zvgmko21phu">Spotify</a>
          </div>
          <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem] space-x-10">
            <a class="bg-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white hover:border-b" href="https://github.com/dhairy-online">GitHub</a>
            <a class="bg-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white hover:border-b" href="https://twitter.com/nightlyistaken">Twitter</a>
          </div>
        </section>
      </div>
    </>
  );
}
