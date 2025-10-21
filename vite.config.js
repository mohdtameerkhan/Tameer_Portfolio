import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe"

export default defineConfig({
  plugins: [
     tailwindcss(),
     react()],
     base:'/',
  server: {
    open: true, 
    browser: chromePath 
  }
})
