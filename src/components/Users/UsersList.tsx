import React from 'react';
import {UserType} from '../../redux/usersReducer';
import style from './UsersList.module.css';
import {NavLink} from 'react-router-dom';

type UsersListPropsType = {
    users: UserType[],
    amountUsers: number
}

const UsersList: React.FC<UsersListPropsType> = ({users, amountUsers}) => {
    return (
        <div className={style.usersList}>
            <h2>Список пользователей</h2>
            <div>
                {users.map(u => {
                    return <div key={u.id} className={style.someUser}>
                        <div className={style.personInfo}>
                            <div className={style.someInfo}>
                                <span>ФИО</span>
                                <p>{u.name}</p>
                            </div>
                            <div className={style.someInfo}>
                                <span>город</span>
                                <p>{u.address.city}</p>
                            </div>
                            <div className={style.someInfo}>
                                <span>компания</span>
                                <p>{u.company.name}</p>
                            </div>
                        </div>
                        <NavLink to={`/${u.id}`}>Подробнее</NavLink>


                    </div>
                        ;
                })}
            </div>
            <h3>Найдено {amountUsers} пользователей</h3>
        </div>

    )
        ;
};

export default UsersList;