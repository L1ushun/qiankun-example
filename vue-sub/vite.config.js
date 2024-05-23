import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
    server: {
        port: 9000,
    },
    plugins: [
        vue(),
        qiankun('vue-sub', {
            // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功
            useDevMode: true
        })
    ],
})
