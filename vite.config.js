import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: './' — bütün fayl yolları nisbidir.
  // Bunun sayəsində sayt həm kök domendə (istifadeci.github.io),
  // həm də alt qovluqda (istifadeci.github.io/repo-adi/) heç nə dəyişmədən işləyir.
  // GitHub Pages üçün bunu DƏYİŞMƏYİN.
  base: './',
  plugins: [react()],
})
