import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => ({
    base: loadEnv(mode, process.cwd()).VITE_APP_BASEURL || '/',
    build: {
        target: ['chrome90'],
        outDir: loadEnv(mode, process.cwd()).VITE_OUT_PUT_DIR || 'dist'
    },
    esbuild: {
        drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    plugins: [
        vue(),
        UnoCSS(),
        createSvgIconsPlugin({
            iconDirs: [resolve(__dirname, 'src/assets/icons')],
            symbolId: 'icon-[name]'
        }),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false
                })
            ],
            dirs: []
        }),
        AutoImport({
            dts: true,
            imports: ['vue', 'vue-router', '@vueuse/core'],
            dirs: ['src/composables']
        })
    ],
    // css相关配置
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#376CF3'
                },
                javascriptEnabled: true
            },
            scss: {
                additionalData: `@import "@/style/mixin.scss";`
            }
        }
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    },
    server: {
        host: '0.0.0.0',
        https: false, // 是否启用 https
        cors: false, // 为开发服务器配置 CORS , 默认启用并允许任何源
        open: false, // 服务启动时自动在浏览器中打开应用
        strictPort: false, // 设为true时端口被占用则直接退出，不会尝试下一个可用端口
        hmr: true // 禁用或配置 HMR 连接
    }
}))
