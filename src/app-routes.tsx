import { HomePage, ProfilePage,Register } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/register',
        element: Register
    },
    {
        path: '/home',
        element: HomePage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
