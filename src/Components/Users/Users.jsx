import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData()
    return (
        <>
            user : {users.length}
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </>
    );
};

export default Users;