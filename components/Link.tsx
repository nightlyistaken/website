// deno-lint-ignore no-explicit-any
export function Link(props: any) {
  return (
    <a href={props.link} class="text-gray-300 underline">{props.children}</a>
  );
}
