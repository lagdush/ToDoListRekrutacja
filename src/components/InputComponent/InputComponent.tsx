import React from 'react';
import { Button, Input, Label } from '@theme-ui/components';
import Wrapper from './Wrapper';

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
  buttonText = 'Zaloguj się',
}) => {
  return (
    <Wrapper>
      <Label
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px',
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
      <Button variant="action" onClick={() => apiRequest(currentUserId)}>
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default InputComponent;
