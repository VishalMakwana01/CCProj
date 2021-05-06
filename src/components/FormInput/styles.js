import styled, { css } from "styled-components";

const mainColor = "black";
const subColor = "grey";

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputField = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &: [type= "password" ] {
    letter-spacing: 0.3em;
  }
`;

// export const FormInputLabel = styled.label`
//   color: ${subColor};
//   font-size: 16px;
//   font-weight: normal;
//   position: absolute;
//   pointer-events: none;
//   left: 5px;
//   top: 10px;
//   transition: 300ms ease all;

//   ${(props) =>
//     props.shrink &&
//     css`
//       top: -14px;
//       font-size: 12px;
//       color: ${mainColor};
//     `}
// `;
