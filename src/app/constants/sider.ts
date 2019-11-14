import { Menu } from '../model/menu';
export const Siders: Array<Menu> = [
    {
        icon: 'dashboard',
        name: 'home',
        text: '高级详情',
        to: '/home'
    },
    {
        icon: 'setting',
        name: 'system',
        text: '基础详情',
        to: '/system'
    },
    {
        icon: 'solution',
        name: 'welcome',
        text: '基础表单',
        to: '/welcome'
    },
    {
        icon: 'pay-circle-o',
        name: 'service',
        text: '分步表单',
        to: '/service'
    },
    {
        icon: 'team',
        name: 'advance',
        text: '高级表单',
        to: '/advance'
    },
    {
        icon: 'message',
        name: 'inquire',
        text: '卡片',
        to: '/inquire'
    },
    {
        icon: 'gift',
        name: 'account/settings',
        text: '个人设置',
        to: '/account/settings'
    },
    {
        icon: 'trademark',
        name: '结果页',
        text: '结果页',
        children: [
            {
                icon: 'schedule',
                name: 'result/success',
                text: '成功页',
                to: '/result/success'
            },
            {
                icon: 'schedule',
                name: 'result/fail',
                text: '失败页',
                to: '/result/fail'
            }
        ]
    },
]