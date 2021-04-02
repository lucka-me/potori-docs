import type { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
    { text: 'Guide', link: '/guide/' },
    { text: 'Privacy', link: '/privacy/' },
    {
        text: 'More',
        children: [
            { text: 'Contribute', link: '/contribute/' },
            {
                text: 'Web App',
                children: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/lucka-me/potori'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/lucka-me/potori/blob/dev/CHANGELOG.md'
                    }
                ]
            },
            {
                text: 'Swift App',
                children: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/lucka-me/potori-swift'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/lucka-me/potori-swift/blob/dev/CHANGELOG.md'
                    }
                ]
            }
        ]
    },
];