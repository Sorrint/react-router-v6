import { Navigate } from 'react-router-dom';
import EditUserPage from './Components/EditUserPage';
import Users from './Components/layouts/Users';
import MainPage from './Components/MainPage';
import UserPage from './Components/UserPage';
import UsersListPage from './Components/UsersListPage';
const routes = (pathname) => [
    { path: '', element: <MainPage /> },
    {
        path: 'users',
        element: <Users />,
        children: [
            { path: '', element: <UsersListPage /> },
            { path: ':userId', element: <Navigate to={`${pathname}/profile`} /> },
            { path: ':userId/profile', element: <UserPage /> },
            { path: ':userId/edit', element: <EditUserPage /> },
            { path: ':uesrId/*', element: <Navigate to={`${pathname.split('/').slice(0, 3).join('/')}/profile`} /> }
        ]
    },
    { path: '*', element: <Navigate to="/" /> }
];

export default routes;
