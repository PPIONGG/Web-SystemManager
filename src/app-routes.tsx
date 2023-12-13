import { HomePage, ProfilePage,Register } from './pages';
import { withNavigationWatcher } from './contexts/navigation';
import test from './components/test/test';

const routes = [
    {
        path: '/register',
        element: Register
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/test',
        element: test
    },
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
