export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    /** Whether to log in for verification, true does not perform verification (guest)*/
    login?: boolean;
}

export interface IFMenu extends IFMenuBase {
    subs?: IFMenu[];
}

const menus: {
    menus: IFMenu[];
    others: IFMenu[] | [];
    [index: string]: any;
} = {
    menus: [
        // Menu related routing
        { key: '/app/dashboard/index', title: 'front page', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/ui',
            title: 'UI',
            icon: 'scan',
            subs: [
                { key: '/app/ui/buttons', title: 'button', component: 'Buttons' },
                { key: '/app/ui/icons', title: 'icon', component: 'Icons' },
                { key: '/app/ui/spins', title: 'loading', component: 'Spins' },
                { key: '/app/ui/modals', title: 'dialog box', component: 'Modals' },
                { key: '/app/ui/notifications', title: 'Notification reminder box', component: 'Notifications' },
                { key: '/app/ui/tabs', title: 'Bookmark page', component: 'Tabs' },
                { key: '/app/ui/banners', title: 'carousel', component: 'Banners' },
                { key: '/app/ui/wysiwyg', title: 'rich text', component: 'WysiwygBundle' },
                { key: '/app/ui/drags', title: 'drag', component: 'Drags' },
                { key: '/app/ui/gallery', title: 'gallery', component: 'Gallery' },
                { key: '/app/ui/map', title: 'map', component: 'MapUi' },
            ],
        },
        {
            key: '/app/animation',
            title: 'animation',
            icon: 'rocket',
            subs: [
                {
                    key: '/app/animation/basicAnimations',
                    title: 'basic animation',
                    component: 'BasicAnimations',
                },
                {
                    key: '/app/animation/exampleAnimations',
                    title: 'Animation case',
                    component: 'ExampleAnimations',
                },
            ],
        },
        {
            key: '/app/table',
            title: 'sheet',
            icon: 'copy',
            subs: [
                { key: '/app/table/basicTable', title: 'Basic sheet', component: 'BasicTable' },
                { key: '/app/table/advancedTable', title: 'Advanced sheet', component: 'AdvancedTable' },
                {
                    key: '/app/table/asynchronousTable',
                    title: 'asynchronous sheet',
                    component: 'AsynchronousTable',
                },
            ],
        },
        {
            key: '/app/chart',
            title: 'chart',
            icon: 'area-chart',
            subs: [
                { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts' },
                { key: '/app/chart/recharts', title: 'recharts', component: 'Recharts' },
            ],
        },
        {
            key: '/subs4',
            title: 'page',
            icon: 'switcher',
            subs: [
                { key: '/login', title: 'Log in' },
                { key: '/404', title: '404' },
            ],
        },
        {
            key: '/app/auth',
            title: 'authority management',
            icon: 'safety',
            subs: [
                { key: '/app/auth/basic', title: 'Basic demo', component: 'AuthBasic' },
                {
                    key: '/app/auth/routerEnter',
                    title: 'Route interception',
                    component: 'RouterEnter',
                    requireAuth: 'auth/testPage',
                },
            ],
        },
        {
            key: '/app/cssModule',
            title: 'cssModule',
            icon: 'star',
            component: 'Cssmodule',
        },
        {
            key: '/app/extension',
            title: 'Function extension',
            icon: 'bars',
            subs: [
                {
                    key: '/app/extension/queryParams',
                    title: 'Question mark formal parameters',
                    component: 'QueryParams',
                    query: '?param1=1&param2=2',
                },
                {
                    key: '/app/extension/visitor',
                    title: 'guest mode',
                    component: 'Visitor',
                    login: true,
                },
                {
                    key: '/app/extension/multiple',
                    title: 'multi-level menu',
                    subs: [
                        {
                            key: '/app/extension/multiple/child',
                            title: 'Multi-level menu submenu',
                            subs: [
                                {
                                    key: '/app/extension/multiple/child/child',
                                    title: 'Multilevel menu subsubmenu',
                                    component: 'MultipleMenu',
                                },
                            ],
                        },
                    ],
                },
                {
                    key: '/app/extension/env',
                    title: 'Environment configuration',
                    component: 'Env',
                },
            ],
        },
    ],
    others: [], // Non-menu related routing
};

export default menus;
