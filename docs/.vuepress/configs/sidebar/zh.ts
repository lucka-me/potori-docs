import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
    '/zh/guide/': [
        {
            isGroup: true,
            text: '指南',
            children: [
                '/zh/guide/README.md',
                '/zh/guide/account.md',
                '/zh/guide/mails.md',
                '/zh/guide/data.md',
            ]
        }
    ]
};