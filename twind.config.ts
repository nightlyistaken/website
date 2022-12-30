import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: "Recursive, monospace",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,MONO@-1,430,0.25,1&display=swap')`,
    // Declare font face
  },
} as Options;
