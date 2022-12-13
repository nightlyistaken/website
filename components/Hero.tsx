// deno-lint-ignore no-explicit-any
export function Hero(props: any) {
  return (
    <div class="py-24 flex items-center min-h-screen justify-center flex-col space-y-14">
      <div class="antialiased decoration-dashed text-white text-6xl mx-auto max-w-[40rem]">
        {props.children}
      </div>
    </div>
  );
}
