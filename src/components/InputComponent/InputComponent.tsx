/** @jsxImportSource theme-ui */
import React from 'react';
import { Button, Input, Label } from '@theme-ui/components';
import Wrapper from './Wrapper';
import { useHistory } from 'react-router';

type GetUserDataFN = (
  inputData: string | undefined,
  payload?: {
    title: string;
  }
) => Promise<void>;

type InputComponentProps = {
  apiRequest: GetUserDataFN;

  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;

  currentUserId: string;

  label: string;

  buttonText?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({
  inputHandler,
  apiRequest,
  currentUserId,
  label,
  buttonText = 'Zaloguj się'
}) => {
  const history = useHistory();
  return (
    <Wrapper>
      <Label
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px'
        }}
      >
        {label}
        <Input
          m={3}
          sx={{
            textAlign: 'center',
            color: 'primary',
            backgroundColor: 'muted',
            padding: '10px 15px'
          }}
          onChange={inputHandler}
        />
      </Label>
      <Button
        variant="action"
        onClick={() => apiRequest(currentUserId)}
      >
        {buttonText}
      </Button>
      <p
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          history.push('/registration');
        }}
      >
        Rejestracja
      </p>
    </Wrapper>
  );
};

export default InputComponent;
