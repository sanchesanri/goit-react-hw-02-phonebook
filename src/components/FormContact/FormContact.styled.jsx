import styled from "styled-components";
import { Form, Field } from 'formik';

export const Container = styled.div`
    width: 350px
`

export const FormContactStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
`


export const InputForm = styled(Field)`
    width:100%;
    margin-bottom: 20px;
`

export const ButtonForm = styled.button`
    // display: block;
    width: 100px
`

