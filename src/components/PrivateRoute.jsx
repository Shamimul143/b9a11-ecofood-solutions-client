
import PropTypes from 'prop-types';

import { Navigate, useLocation } from 'react-router-dom';
import AllAuth from '../pages/AllAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = AllAuth()

    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-spinner loading-lg ml-[170px] md:ml-[350px]  lg:ml-[600px]"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;