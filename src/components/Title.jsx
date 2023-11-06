import PropTypes from 'prop-types';
const Title = ({ children }) => {

    return (
      <>
        <p className="text-center py-10 text-4xl font-semibold text-[#fc9f11]">{children}</p>
      </>
    );
  };
  Title.propTypes = {
    children: PropTypes.node.isRequired
  };
  export default Title;
  