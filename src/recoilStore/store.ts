import { atom } from 'recoil';
import { DataFromApi } from '../models/dataFromApi';
export const userTodosList = atom({
  key: 'userTodos',
  default: [] as DataFromApi[]
});