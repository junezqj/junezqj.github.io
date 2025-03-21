import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
    theme: defaultTheme({
        sidebar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'GIT',
                children: [
                    {
                        text: '基本命令',
                        link: '/git/command',
                    },
                ],
            },
        ],
    }),
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: "Bala bala's website",
    description: '这是我的一个技术分享&个人博客网站',
}
