import { atom } from 'recoil';
import { DataFromApi, UserDataFromApi} from '../models/dataFromApi';


export const userTodosListAtom = atom({
  key: 'userTodos',
  default: [] as DataFromApi[]
});

export const currentUserIdAtom = atom({
  key: 'userId',
  default: ''
});

export const currentUserDataAtom = atom({
  key: 'userData',
  default: {} as UserDataFromApi
});

export const textState = atom({
  key: 'textState',
  default: '',
});