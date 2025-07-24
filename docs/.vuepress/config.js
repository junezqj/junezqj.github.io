import {defaultTheme} from '@vuepress/theme-default'
import {viteBundler} from '@vuepress/bundler-vite'

export default {
    theme: defaultTheme({
        logo: '/images/profile-pic.png',
        navbar: [
            {text: '首页', link: '/'},
            {text: '前端', link: '/frontend/'},
            {text: '金融', link: '/finance/'},
            // {text: '后端', link: '/backend'},
        ],
        sidebar: {
            '/frontend/': [
                {
                    text: 'GIT 版本控制',
                    children: [
                        {text: '基本命令', link: '/frontend/git/command'},
                    ],
                },
                {
                    text: 'CSS 样式',
                    children: [
                        {text: 'sass & less & stylus', link: '/frontend/css/sass'},
                    ],
                },
                {
                    text: 'JavaScript 语法',
                    children: [
                        {text: '闭包', link: '/frontend/js/closure'},
                    ],
                },
            ],
            '/finance/': [
                {
                    text: '基金与市场基础',
                    link: '/finance/fund-intro'
                }
            ]
        },
        contributors: false,
        lastUpdated: false,
    }),
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: "Bala bala's website",
    description: '这是我的一个技术分享&个人博客网站',
    head: [['link', {rel: 'icon', href: '/images/profile-pic.png'}]],
    cleanUrls: true,
}
