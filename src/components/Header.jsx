
import PropTypes from 'prop-types';

const Header = ({ isShowLoginForm }) => {

    const handleSignIn = () => {
        isShowLoginForm(true)
    }

    return (
        <div className="absolute px-32 py-2 bg-gradient-to-b from-black w-full z-50 flex justify-between items-center" >
            <img
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
                className="w-44"
            />
            <button
                className="bg-red-600 px-3 py-1 font-semibold text-white rounded drop-shadow-2xl"
                onClick={handleSignIn}
            >Sign In</button>
        </div>
    )
}

Header.propTypes = {
    isShowLoginForm: PropTypes.any.isRequired,
};

export default Header