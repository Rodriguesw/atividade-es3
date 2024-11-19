import styled from 'styled-components'

export const H2 = styled.h2`
  text-align: center;

  color: #6C63FF;
  font-size: 1.7rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  >div> div >div >div { 
    >div {
      padding: 10px;

    > input {
        padding: 0px;
      }
    }

    > input{
      padding: 10px;
    }
}
`;