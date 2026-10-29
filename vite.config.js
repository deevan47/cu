import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' = relative asset paths, so the build works on GitHub Pages
// whatever your repo is called (user.github.io/any-repo-name/).
export default defineConfig({
  base: './',
  plugins: [react()],
});
