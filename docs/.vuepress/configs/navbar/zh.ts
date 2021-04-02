import type { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
    { text: '指南', link: '/zh/guide/' },
    { text: '隐私', link: '/zh/privacy/' },
    {
        text: '了解更多',
        children: [
            { text: '贡献', link: '/zh/contribute/' },
            {
                text: '网页应用',
                children: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/lucka-me/potori'
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/lucka-me/potori/blob/dev/CHANGELOG.md'
                    }
                ]
            },
            {
                text: 'Swift应用',
                children: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/lucka-me/potori-swift'
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/lucka-me/potori-swift/blob/dev/CHANGELOG.md'
                    }
                ]
            }
        ]
    },
];