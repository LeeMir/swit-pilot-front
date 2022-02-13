import React from 'react';
import { Input, Label, Wrapper } from './style';

const LoginInput = ({ label, value, onChange, placeholder, type }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} placeholder={placeholder} type={type} />
    </Wrapper>
  );
};

export default LoginInput;
