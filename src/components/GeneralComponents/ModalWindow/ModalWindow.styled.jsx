import styled from 'styled-components';

const ModalWindow = styled.div`
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 48px);
  width: 295px;
  padding: 20px;
  background-color: #ffffff;
  position:relative;

  @media (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

export { ModalWindow };
