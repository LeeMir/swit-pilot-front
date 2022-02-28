import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  &:hover {
    background-color: #F1F1F1;
  }
`;

export const MessageHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UpdateIcon = styled.div`
  cursor: pointer;
  img {
    width: 1rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%);
  }
  &:hover {
    img {
      filter: invert(0%) sepia(100%) saturate(17%) hue-rotate(53deg) brightness(95%) contrast(100%);
    }
  }
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
  img {
    width: 1rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%);
  }
  &:hover {
    img {
      filter: invert(0%) sepia(100%) saturate(17%) hue-rotate(53deg) brightness(95%) contrast(100%);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Contents = styled.pre`
  width: 100%;
`;
