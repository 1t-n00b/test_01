import {ACTION_TYPE} from '../ENUM/ACTION_TYPE';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type initialStateType = {
    status: RequestStatusType
}

const initialState: initialStateType = {
    status: 'loading' as RequestStatusType,
};

export const appReducer = (state = initialState, action: ActionTypeForApp) => {
    switch (action.type) {
        case ACTION_TYPE.CHANGE_STATUS: {
            return {...state, status: action.status};
        }
        default: {
            return state;
        }
    }
};

type ChangeStatusAT = {
    type: ACTION_TYPE.CHANGE_STATUS,
    status: RequestStatusType,
}

export const ChangeStatus = (status: RequestStatusType): ChangeStatusAT => {
    return {
        type: ACTION_TYPE.CHANGE_STATUS,
        status,
    };
};

export type ActionTypeForApp = ChangeStatusAT