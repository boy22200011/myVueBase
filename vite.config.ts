/// <reference types="vite/client" />

import { type UserConfigExport, type ConfigEnv, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import svgLoader from "vite-svg-loader"
import UnoCSS from "unocss/vite"
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    /** 打包時根據實際情況修改 base */
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        /** @ 符號指向 src 目錄 */
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      /** 設置 host: true 才可以使用 Network 的形式，以 IP 訪問項目 */
      host: true, // host: "0.0.0.0"
      /** 端口號 */
      port: 3333,
      /** 是否自動打開瀏覽器 */
      open: true,
      /** 跨域設置允許 */
      cors: true,
      /** 端口被佔用時，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        "/api/v1": {
          target: "https://127.0.0.1:7197",
          // target: "https://mock.mengxuegu.com/mock/67358a4a84647c0f2b3f0f92",
          ws: true,
          /** 是否允許跨域 */
          changeOrigin: true,
          secure: false
        }
      },
      /** 預熱常用文件，提高初始頁面加載速度 */
      warmup: {
        clientFiles: ["./src/layouts/**/*.vue"]
      }
    },
    build: {
      /** 單個 chunk 文件的大小超過 2048KB 時發出警告 */
      chunkSizeWarningLimit: 2048,
      /** 禁用 gzip 壓縮大小報告 */
      reportCompressedSize: false,
      /** 打包後靜態資源目錄 */
      assetsDir: "static",
      rollupOptions: {
        output: {
          /**
           * 分塊策略
           * 1. 注意這些包名必須存在，否則打包會報錯
           * 2. 如果你不想自定義 chunk 分割策略，可以直接移除這段配置
           */
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            element: ["element-plus", "@element-plus/icons-vue"]
          }
        }
      }
    },
    /** 混淆器 */
    esbuild:
      mode === "development"
        ? undefined
        : {
            /** 打包時移除 console.log */
            pure: ["console.log"],
            /** 打包時移除 debugger */
            drop: ["debugger"],
            /** 打包時移除所有註釋 */
            legalComments: "none"
          },
    /** Vite 插件 */
    plugins: [
      vue(),
      /** 將 SVG 靜態圖轉化為 Vue 組件 */
      svgLoader({ defaultImport: "url" }),
      /** UnoCSS */
      UnoCSS()
    ],
    /** Vitest 單元測試配置：https://cn.vitest.dev/config */
    test: {
      include: ["tests/**/*.test.ts"],
      environment: "jsdom"
    }
  }
}
