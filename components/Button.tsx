export function Button(props: { link: string; name: string }) {
  return (
    <a
      class="bg-black text-gray-300 px-4 py-2 rounded-md transition-colors hover:bg-gray-300 hover:text-black "
      href={props.link}
    >
      {props.name}
    </a>
  );
}
