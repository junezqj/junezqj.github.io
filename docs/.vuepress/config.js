import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
    theme: defaultTheme(),
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: "Bala bala's website",
    description: '这是我的一个技术分享&个人博客网站',
}
