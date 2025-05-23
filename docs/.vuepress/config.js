import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
    theme: defaultTheme({
        logo: '/images/profile-pic.png',
        sidebar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'GIT 版本控制',
                children: [
                    {
                        text: '基本命令',
                        link: '/git/command',
                    },
                ],
            },
            {
                text: 'CSS 样式',
                children: [
                    {
                        text: 'sass & less & stylus',
                        link: '/css/sass',
                    },
                ],
            },
            {
                text: 'JavaScript 语法',
                children: [
                    {
                        text: '闭包',
                        link: '/js/closure',
                    },
                ],
            },
        ],
    }),
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: "Bala bala's website",
    description: '这是我的一个技术分享&个人博客网站',
    head: [['link', { rel: 'icon', href: '/images/profile-pic.png' }]],
}
