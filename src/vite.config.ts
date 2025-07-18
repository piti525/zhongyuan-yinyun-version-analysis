// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // 假设你用了react, 如果没有可以删掉这行
import path from 'path';

export default defineConfig(({ mode }) => {
  // 加载 .env 文件里的环境变量
  const env = loadEnv(mode, process.cwd(), '');

  return {
    //
    // --- 这是我们添加的关键配置！ ---
    //
   

    plugins: [
      react(), // 假设你用了react, 如果没有可以删掉这行
    ],

    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 注意：我把这里的路径修正为常见的'./src'
      },
    },
  };
});