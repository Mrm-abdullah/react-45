import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const navigate = useNavigate()

    const userDetail = () => {
        navigate(`/users/${id}`)
    }
    const { id, email, username, name } = user
    return (
        <div className="border ">
            Name: {name} <br />
            Uername: {username} <br />
            Email: {email} <br />
            {/* <Link to={`/users/${id}`}>show detals</Link> */}
            <Link to={`/users/${id}`}><button className="btn">Detals</button></Link><br />
            <button onClick={userDetail} className="btn">User Details</button>
        </div>
    );
};

export default User;