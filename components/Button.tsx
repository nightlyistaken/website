export function Button(props: { link: string; name: string }) {
  return (
    <a
      class="bg-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white hover:border-b"
      href={props.link}
    >
      {props.name}
    </a>
  );
}
