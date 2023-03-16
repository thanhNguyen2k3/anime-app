import BlogPage from '../pages/BlogPage';
import CategoryPage from '../pages/CategoryPage';
import ContactPage from '../pages/ContactPage';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WatchingPage from '../pages/WatchingPage';

const publicPrivate = [
    { path: '/', component: HomePage },
    { path: '/category', component: CategoryPage },
    { path: '/blog', component: BlogPage },
    { path: '/contact', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/detail', component: DetailPage },
    { path: '/watch', component: WatchingPage },
];

const privateRoutes = [];

export { publicPrivate, privateRoutes };
