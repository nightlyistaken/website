import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: "Unbounded, cursive",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Unbounded&display=swa')`,
    // Declare font face
  },
} as Options;
