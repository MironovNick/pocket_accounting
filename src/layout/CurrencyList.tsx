import React, {ChangeEvent, useState} from 'react';
import {styled} from "styled-components";

const currencyItems = ['USD', 'BYN', 'EUR', 'GBP']

type PropsType = {
    changeCurrency: (index: number) => void
    currentTheme: boolean
}

export const CurrencyList = (props: PropsType) => {

    const currencyChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.changeCurrency(Number(event.currentTarget.value))
    }

    return(
        <CurrList title="Change currancy">
            <select className={props.currentTheme ? "selectDark" : "selectLight"}
                    onChange={currencyChangeHandler}>
                {currencyItems.map((item: string, index: number) => {
                        return (
                            <option className={props.currentTheme ? "optionDark" : "optionLight"}
                                    value={index}>{item}</option>
                        )
                    }
                )
                }
            </select>
        </CurrList>
    )
}

export const CurrList = styled.div`
  margin-top: -3px;
  
  .selectDark{
    border: none;
    background-color: transparent;
    color: #BECCE0;
    font-size: 14px;
    cursor: pointer;
  }

  .optionDark{
    background-color: #1B2F4A;
    color: #BECCE0;
    border: 1px solid #2A4A74;
  }

  .selectLight{
    border: none;
    background-color: transparent;
    color: #8E6C6B;
    font-size: 14px;
    cursor: pointer;
  }

  .optionLight{
    background-color: rgba(231, 222, 223, 0.85);
    color: #8E6C6B;
    border: 1px solid #F9EFF0;

    option:nth-child(1):hover{
      background-color: #D8605A;
      color: white;
    }
    
  }


  
`