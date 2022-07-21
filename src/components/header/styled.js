import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
  }

  button {
    background-color: #2c5282;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #276296;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
