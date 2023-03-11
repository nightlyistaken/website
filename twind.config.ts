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
      `url('https://fonts.googleapis.com/css2?family=Recursive:wght,CASL,CRSV,MONO@510,1,1,0.25&display=swap')`,
    // Declare font face
  },
} as Options;
