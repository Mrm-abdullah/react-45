import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const navigate = useNavigate()
    const {userId} = useParams()
    console.log(userId);
    const backButton = () => {
        navigate(-1);
    }
    const user = useLoaderData()
    const { id, email, username, name } = user
    return (
        <div>
            askjsad: {name}
            <button onClick={backButton} className="btn">back</button>
        </div>
    );
};

export default UserDetails;