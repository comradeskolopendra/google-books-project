/* eslint-disable react/display-name */
import { Navigate } from "react-router";

const withNavigate = (WrappedComponent, tracker) => (props) => {
    if (tracker) {
        return <Navigate to={"/"} replace />;
    }

    return <WrappedComponent {...props} />;
};

export default withNavigate;
