import { defineUserConfig, UserConfig, DefaultThemeOptions } from 'vuepress';

import { navbar, sidebar } from './configs';

const themeConfig: DefaultThemeOptions = {
    logo: 'assets/hero.png',
    repo: 'lucka-me/potori-docs',
    locales: {
        '/': {
            selectLanguageText: 'Languages',
            selectLanguageName: 'English',
            navbar: navbar.en,
            sidebar: sidebar.en,
        },
        '/zh/': {
            selectLanguageText: '选择语言',
            selectLanguageName: '中文',
            navbar: navbar.zh,
            sidebar: sidebar.zh,
        },
    }
}

const userConfig: UserConfig = {
    base: '/docs/',
    dest: 'dist',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Potori',
            description: 'Ingress Nominations Manager'
        },
        '/zh/': {
            lang: 'zh',
            title: 'Potori',
            description: 'Ingress提名管理器'
        }
    },
    themeConfig: themeConfig,
};

export default defineUserConfig(userConfig);