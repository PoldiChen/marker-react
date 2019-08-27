import AsyncCompnent from "../components/common/HighOrderComponents/AsyncComponent";

const PageHome = AsyncCompnent(() => import("../pages/PageHome.jsx"));
const PageList = AsyncCompnent(() => import("../pages/PageList.jsx"));
const PageMarker = AsyncCompnent(() => import("../pages/PageMarker.jsx"));
const PageLabel = AsyncCompnent(() => import("../pages/PageLabel.jsx"));
const PageSetting = AsyncCompnent(() => import("../pages/PageSetting.jsx"));

const ROUTES = [
    {
        key: 'Home',
        link: '/home',
        iconType: 'home',
        text: 'Home',
        component: PageHome
    }, {
        key: 'List',
        link: '/list',
        iconType: 'profile',
        text: 'List',
        component: PageList
    }, {
        key: 'Marker',
        link: '/marker',
        iconType: 'edit',
        text: 'Marker',
        component: PageMarker
    }, {
        key: 'Label',
        link: '/label',
        iconType: 'tag',
        text: 'Label',
        component: PageLabel
    }, {
        key: 'Setting',
        link: '/setting',
        iconType: 'setting',
        text: 'Setting',
        component: PageSetting
    }
];

export { ROUTES };