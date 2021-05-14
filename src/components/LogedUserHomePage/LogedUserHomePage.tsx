import React, { useEffect } from 'react';
import {
  currentUserIdAtom,
  currentUserDataAtom,
  userTodosListAtom
} from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';

const LogedUserHomePage: React.FC = () => {
  const [userTodos] = useRecoilState(userTodosListAtom);
  const [currentUserId] = useRecoilState(currentUserIdAtom);
  const [currentUserData, setCurrentUserData] =
    useRecoilState(currentUserDataAtom);

  useEffect(() => {
    const getUserDataFromApi = async (userId: string | undefined) => {
      try {
        if (!userId) {
          return;
        }
        const rawDataFromApi = await fetch(
          `https://gorest.co.in/public-api/users/${userId}`
        );
        const dataFromApi = await rawDataFromApi.json();
        const userData = dataFromApi.data;
        setCurrentUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDataFromApi(currentUserId);
  }, [currentUserId, setCurrentUserData]);

  return (
    <div>
      <h1>{`Witaj ${currentUserData.name}`}</h1>
      <div>Twoja Lista zadań: </div>
      {userTodos.map((list) => {
        return (
          <p key={list.created_at}>
            Zadanie: <b>{list.title}</b>
          </p>
        );
      })}
    </div>
  );
};

export default LogedUserHomePage;
