import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [daisyui],

  daisyui: {
    themes: ['cupcake'],
    logs: false
  }
} satisfies Config;
