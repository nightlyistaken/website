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
      </div>
    </>
  );
}
