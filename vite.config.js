import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],

//   resolve: {
//     alias: {
//       '@': '/src',
//       '@core': '/src/@core',
//       '@layouts': '/src/@layouts',
//       '@images': '/src/assets/images/',
//       '@styles': '/src/styles/',
//       '@configured-variables': '/src/styles/variables/_template.scss',
//       '@axios': '/src/plugins/axios',
//       'apexcharts': 'apexcharts-clevision',
//     },
//   },

//   build: {
//     chunkSizeWarningLimit: 5000,
//   },
// });
