import React, {useEffect, useState} from 'react';
import User from './User';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../redux/reduxStore';

type UserParams = {
    userID: string
};

const UserContainer: React.FC = () => {
    const {userID} = useParams<UserParams>();
    const [id, setId] = useState<number>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (userID) {
            setId(+userID);
        }
        // dispatch(SetUsersTC());

    }, [userID, dispatch]);
    const user = useAppSelector(state => state.users.find(u => u.id === id));

    return (
        <>
            {user && <User user={user}/>}
        </>

    );
};

export default UserContainer;