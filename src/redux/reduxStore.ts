import {ActionTypeForUsersReducer, usersReducer} from './usersReducer';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {ActionTypeForApp, appReducer} from './appReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

type AppActionsType = ActionTypeForUsersReducer | ActionTypeForApp
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export default store;
