import { createAction, props } from '@ngrx/store';
import { Userinfo } from '../../model/userinfo';

export const login = createAction('login action', props<Userinfo>());
export const logout = createAction('logout action');