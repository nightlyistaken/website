export function Button(props: { link: string; name: string }) {
  return (
    <a
      class="bg-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-[#02040F] hover:text-white "
      href={props.link}
    >
      {props.name}
    </a>
  );
}
