import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            Oops!!!!
            <p>
                <i> {error.statusText || error.message} </i>
                {
                    error.status === 404 && <div>
                        page not pound. please go to Home <br />
                        <Link to={'/'}>Home</Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;