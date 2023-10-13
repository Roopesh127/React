import { Link } from "react-router-dom";

const Routing = () => {
    return (
        <>
            <h1>Welcome to Home page</h1>
            <Link to="/call">CONTACT</Link><br />

            <Link to="/ordekho">ABOUT</Link><br />

            <Link to="/path">CAREER</Link><br />
        </>


    )
};
export default Routing;