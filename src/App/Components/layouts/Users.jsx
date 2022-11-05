import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    // const params = useParams();
    // const { userId } = params;
    // let { path } = useRouteMatch();

    return (
        <>
            <div>Users Layout</div>
            <Outlet />
        </>
    );
};

export default Users;
