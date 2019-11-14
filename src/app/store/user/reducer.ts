import { createReducer, on } from '@ngrx/store';
import { login, logout } from './actions';
import { Userinfo } from '../../model/userinfo';
import { user as storage } from '../../utils/storage';

export const userinfo = new Userinfo(
    storage.get('username'),
    storage.get('token'),
    storage.get('suid'));

const _userReducer = createReducer(userinfo,
    on(login, (state, userinfo) => {
        storage.set('username', userinfo.username);
        storage.set('token', userinfo.token);
        storage.set('suid', userinfo.suid);
        return state;
    }),
    on(logout, state => {
        storage.clear();
        return state;
    }),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}
