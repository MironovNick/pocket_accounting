import React from 'react';
import {styled} from "styled-components";

export type PropsType = {
    incomeOpen: () => void
    rateOpen: () => void
    currentTheme: boolean
}

export const AddBar = (props: PropsType) => {
    return(
        <AddSection>
            <div className={props.currentTheme ? "AddSectionDark" : "AddSectionLight"}>
                <AddButton className="add-income-button" onClick={props.incomeOpen} title="Add new income check">+ income</AddButton>
                <AddButton className="add-rate-button" onClick={props.rateOpen} title="Add new expence check">+ expense</AddButton>
            </div>
        </AddSection>
    )
}

const AddSection = styled.section`
  width: inherit;

  .AddSectionDark {
    width: inherit;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    bottom: 0;
    position: fixed;
    background-color: #1B2F4A;
    border-top: 2px solid #2A4A74;
    transition: .2s ease-in-out;
  }

  .AddSectionLight {
    width: inherit;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    bottom: 0;
    position: fixed;
    background-color: #EBCBBB;
    border-top: 2px solid #F9EFF0;
    transition: .2s ease-in-out;
  }

  .add-income-button {
    background-color: #4377EA;
  }

  .add-rate-button {
    background-color: #FF7174;
  }

  @media screen and (max-width: 992px) {
    width: inherit;
  }
`

const AddButton = styled.button`
  width: 110px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  padding: 5px 0;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 5px;
`