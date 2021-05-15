import React from 'react';
import {
  currentUserDataAtom,
} from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';

const LogedUserHomePage: React.FC = () => {
  const [currentUserData] = useRecoilState(currentUserDataAtom);

  return (
    <>
      <h1>{`Witaj ${currentUserData.name}`}</h1>
    </>
  );
};

export default LogedUserHomePage;
