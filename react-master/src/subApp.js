const microApps = [
    {
        name: 'react-sub',
        entry: process.env.REACT_APP_REACT_SUB,
        activeRule: '/app-react',
        container: '#root-sub',
        // 传递给子应用的值
        props: {
            routeBase: '/app-react'
        }
    },
    {
        name: 'vue-sub',
        entry: process.env.REACT_APP_VUE_SUB,
        activeRule: '/app-vue',
        container: '#root-sub',
    },
]

export default microApps;
