import { defineConfig } from 'vite'
import data from "./src/assets/data.json"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:data["basename"]+"/"
})
