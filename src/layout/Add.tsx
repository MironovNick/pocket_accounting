import React from 'react';
import {styled} from "styled-components";

export type PropsType = {
    incomeOpen: () => void
    rateOpen: () => void
}

export const AddBar = (props: PropsType) => {
    return(
        <AddSection>
            <AddButton className="add-income-button" onClick={props.incomeOpen} >+ income</AddButton>
            <AddButton className="add-rate-button" onClick={props.rateOpen} >+ rate</AddButton>
        </AddSection>
    )
}

const AddSection = styled.section`
  width: inherit;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 10px 10px;
  bottom: 0;
  position: fixed;
  border-top: 2px solid #D3D3D3;

  .add-income-button{
    background-color: #4377EA;
  }

  .add-rate-button{
    background-color: #FF7174;
  }
`

const AddButton = styled.button`
  width: 110px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  padding: 10px 0;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 5px;
`