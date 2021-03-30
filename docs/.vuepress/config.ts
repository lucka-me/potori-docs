import { defineUserConfig, UserConfig, DefaultThemeOptions } from 'vuepress';

const themeConfig: DefaultThemeOptions = {
    repo: 'lucka-me/potori-docs',
    locales: {
        '/': {
            selectLanguageText: 'Languages',
            selectLanguageName: 'English',
            navbar: [
                { text: 'Account', link: '/account/' },
                { text: 'Usage', link: '/usage/' },
                { text: 'Privacy', link: '/privacy/' },
                {
                    text: 'More',
                    children: [
                        { text: 'Contribute', link: '/contribute/' },
                        { text: 'License', link: 'https://github.com/lucka-me/potori/blob/master/LICENSE' },
                        { text: 'Changelog', link: 'https://github.com/lucka-me/potori/blob/master/CHANGELOG.md' },
                    ]
                },
            ]
        },
        '/zh/': {
            selectLanguageText: '选择语言',
            selectLanguageName: '中文',
            navbar: [
                { text: '帐号', link: '/zh/account/' },
                { text: '使用', link: '/zh/usage/' },
                { text: '隐私', link: '/zh/privacy/' },
                {
                    text: '了解更多',
                    children: [
                        { text: '贡献', link: '/zh/contribute/' },
                        { text: '许可', link: 'https://github.com/lucka-me/potori/blob/main/LICENSE' },
                        { text: '更新日志', link: 'https://github.com/lucka-me/potori/blob/main/CHANGELOG.md' },
                    ],
                },
            ]
        },
    }
};

const userConfig: UserConfig = {
    base: '/docs/',
    title: 'Potori Docs',
    description: 'Documents for Potori',
    dest: 'dist',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Potori Docs',
            description: 'Documents for Potori'
        },
        '/zh/': {
            lang: 'zh',
            title: 'Potori文档',
            description: 'Potori的文档'
        }
    },
    themeConfig: themeConfig
};

const config = defineUserConfig(userConfig);

export default config;