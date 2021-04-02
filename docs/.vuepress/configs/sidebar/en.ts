import type { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
    '/guide/': [
        {
            isGroup: true,
            text: 'Guide',
            children: [
                '/guide/README.md',
                '/guide/account.md',
                '/guide/mails.md',
                '/guide/data.md',
            ]
        }
    ]
};