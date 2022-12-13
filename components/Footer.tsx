// deno-lint-ignore no-explicit-any
export function Footer(props: any) {
  return (
    <div class="py-24 flex items-center min-h-screen justify-center flex-col space-y-14">
      {props.children}
    </div>
  );
}
