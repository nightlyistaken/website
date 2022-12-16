// deno-lint-ignore no-explicit-any
export function Hero(props: any) {
  return (
    <div class="py-24 flex items-center min-h-screen justify-center">
      <div class="decoration-dashed text-white text-lg sm:text-6xl max-w-[10rem] sm:max-w-[43rem]">
        {props.children}
      </div>
    </div>
  );
}
