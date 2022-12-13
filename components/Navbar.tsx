export function Navbar() {
  return (
    <section class="fixed mx-auto backdrop-filter backdrop-blur-lg border-b border-opacity-50 border-white bg-opacity-70 z-10">
      <nav class="flex justify-between text-black w-screen">
        <div class="px-1 xl:px-10 py-3 flex w-full items-center">
          <a class="text-lg font-bold font-heading trasnform transition-transform hover:rotate-1" href="#">
            <span class="text-gray-200 font-sans">
              Nightly
            </span>
          </a>
        </div>
      </nav>
    </section>
  );
}