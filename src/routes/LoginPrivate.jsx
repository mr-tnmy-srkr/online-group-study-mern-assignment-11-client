import { Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const LoginPrivate = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};
LoginPrivate.propTypes = {
  children: PropTypes.node,
};
export default LoginPrivate;
