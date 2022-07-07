import React, {useState} from 'react';
import {UserType} from '../../../redux/usersReducer';
import {useFormik} from 'formik';
import style from './User.module.css';

type UserPropsType = {
    user: UserType
}

type FormikErrorType = {
    firstName?: string,
    userName?: string,
    email?: string,
    street?: string,
    city?: string,
    zipCode?: string,
    phone?: string,
    website?: string,
}

const User: React.FC<UserPropsType> = ({user}) => {
    const [isBlock, setBlock] = useState<boolean>(true);

    const onClickHandler = () => {
        setBlock(!isBlock);
    };
    const formik = useFormik({
        initialValues: {
            firstName: user.name,
            userName: user.username,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipCode: user.address.zipcode,
            phone: user.phone,
            website: user.website,
        },
        validate: (values) => {
            const letters = /[A-Za-z]{2,}\b.+?[A-Za-z]{2,}/;
            const errors: FormikErrorType = {};
            if (!values.firstName) {
                errors.firstName = 'Required';
            } else if (!letters.test(values.firstName)) {
                errors.firstName = 'You entered an invalid name.';
            } else if (!values.userName) {
                errors.userName = 'Required';
            } else if (!/^[a-z_?.?A-Z]{3,16}$/.test(values.userName)) {
                errors.userName = 'Invalid UserName';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi.test(values.website)) {
                errors.website = 'Insdfsdfsdfsdfsdf';
            } else if (!/^\d+-?\d+$/.test(values.zipCode))
                errors.zipCode = '454645454564';
            return errors;

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={style.userProfile}>
            <div className={style.header}>
                <h3>Профиль пользователя</h3>
                <button onClick={onClickHandler}>Редактировать</button>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="firstName">Name</label>
                    <input
                        id="name"
                        type="text"
                        disabled={isBlock}
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}

                    <label htmlFor="userName">User Name</label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        disabled={isBlock}
                        placeholder={user.username}
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                    />
                    {formik.errors.userName && <div>{formik.errors.userName}</div>}

                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        disabled={isBlock}
                        placeholder={user.email}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && <div>{formik.errors.email}</div>}


                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        name="street"
                        type="text"
                        disabled={isBlock}
                        placeholder={user.address.street}
                        onChange={formik.handleChange}
                        value={formik.values.street}
                    />

                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        disabled={isBlock}
                        placeholder={user.address.city}
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    />

                    <label htmlFor="zipCode">Zip code</label>
                    <input
                        id="zipCode"
                        name="zipCode"
                        disabled={isBlock}
                        placeholder={user.address.zipcode}
                        onChange={formik.handleChange}
                        value={formik.values.zipCode}
                    />
                    {formik.errors.zipCode && <div>{formik.errors.zipCode}</div>}

                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        disabled={isBlock}
                        placeholder={user.phone}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />

                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        name="website"
                        // type="url"
                        disabled={isBlock}
                        placeholder={user.website}
                        onChange={formik.handleChange}
                        value={formik.values.website}
                    />
                    {formik.errors.website && <div>{formik.errors.website}</div>}

                    <label htmlFor="comment">Comment</label>
                    <input
                        id="comment"
                        className={style.comment}
                        name="comment"
                        // type="url"
                        disabled={isBlock}
                    />

                </div>

            </form>
            {/* eslint-disable-next-line max-len */}
            <button className={style.submitBtn} type="submit" disabled={isBlock || Object.keys(formik.errors).length !== 0}>Submit</button>
        </div>
    );
};

export default User;


