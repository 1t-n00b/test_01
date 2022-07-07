import React from 'react';
import Sort from './Sort';
import {useAppDispatch} from '../../redux/reduxStore';
import {SortUsers} from '../../redux/usersReducer';

const SortContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const sortBy = (event: React.MouseEvent<HTMLSpanElement>) => {
        if (event.currentTarget.dataset.sortby) {
            const trigger: string = event.currentTarget.dataset.sortby;
            if (trigger === 'city') {
                dispatch(SortUsers(trigger));
            } else {
                dispatch(SortUsers('company'));
            }
        }
    };
    return (
        <Sort sortBy={sortBy}/>
    );
};

export default SortContainer;