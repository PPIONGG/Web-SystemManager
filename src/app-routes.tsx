import { HomePage, Register,RegisterV2 } from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";
import test from "./components/test/test";
import AppBackdrop from "./pages/Backdrop/BackdropApp";

const routes = [
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/registerTest",
    element: RegisterV2,
  },
  {
    path: "/backdrop",
    element: AppBackdrop,
  },
//   {
//     path: "/test",
//     element: test,
//   },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
