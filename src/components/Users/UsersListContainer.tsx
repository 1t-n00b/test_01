import React, {useEffect} from 'react';
import {SetUsersTC} from '../../redux/usersReducer';
import {useAppDispatch, useAppSelector} from '../../redux/reduxStore';
import UsersList from './UsersList';
import { CircularProgress } from '@material-ui/core';

const UsersListContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users);
    const amountUsers = users.length;


    useEffect(() => {
        dispatch(SetUsersTC());
    }, [dispatch]);
    const loading = useAppSelector(state => state.app.status);
    if (loading === 'loading') {
        return <div
            style={{position: 'absolute', top: '30%', left:'50%'}}>
            <CircularProgress/>
        </div>;
    }
    return (
        <UsersList users={users} amountUsers={amountUsers}/>
    );
};

export default UsersListContainer;