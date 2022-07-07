import {ACTION_TYPE} from '../ENUM/ACTION_TYPE';
import {usersAPI} from '../api/usersAPI';
import {AppThunk} from './reduxStore';
import {ChangeStatus} from './appReducer';

const initialState: UserType[] = [];

export const usersReducer = (state = initialState, action: ActionTypeForUsersReducer) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USERS: {
            return action.users.map(u => u);
        }
        case ACTION_TYPE.SORT_USERS: {
            if (action.value === 'city') {
                return [...state].sort((a, b) => {
                    return a.address.city.toLowerCase() > b.address.city.toLowerCase() ? 1 : -1;
                });
            } else {
                return [...state].sort((a, b) => {
                    return a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1;
                });
            }
        }
        default:
            return state;
    }
};

export const SetUsersTC = (): AppThunk => (dispatch) => {
    usersAPI.getUsers().then(res => {
        dispatch(SetUsers(res.data));
        dispatch(ChangeStatus('succeeded'));
    });
};

export const SetUsers = (users: UserType[]): SetUsersAT => {
    return {
        type: ACTION_TYPE.SET_USERS,
        users,
    };
};

export const SortUsers = (value: 'city' | 'company'): SortUsersAT => {
    return {
        type: ACTION_TYPE.SORT_USERS,
        value,
    };
};

export type ActionTypeForUsersReducer = SetUsersAT | SortUsersAT

type SortUsersAT = {
    type: ACTION_TYPE.SORT_USERS,
    value: 'city' | 'company',
}
type SetUsersAT = {
    type: ACTION_TYPE.SET_USERS,
    users: UserType[],
}

export type UserType = {
    'id': number,
    'name': string,
    'username': string,
    'email': string,
    'address': AddressType,
    'phone': string,
    'website': string,
    'company': CompanyType
}

type AddressType = {
    'street': string,
    'suite': string,
    'city': string,
    'zipcode': string,
    'geo': {
        'lat': string,
        'lng': string
    }
}

type CompanyType = {
    'name': string,
    'catchPhrase': string,
    'bs': string
}