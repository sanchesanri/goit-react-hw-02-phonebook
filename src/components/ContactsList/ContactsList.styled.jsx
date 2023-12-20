import styled from "styled-components";

export const Container = styled.section`
    width: 350px;
    padding: 20px;
`

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    
    &:not(:last-child){
        margin-bottom: 5px;
    }
`

export const Text = styled.p`
    display: inline;
`

export const ButtonList = styled.button`
    // margin-left: auto;
`