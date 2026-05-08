import React from 'react';
import {styled} from "styled-components";
import {FlexWrapper} from "../components/Wrapper";
import {incomeRateFilterType} from "../App";
import {ToolsWindow} from "./MonthButtonWindow";
import {HeaderMenu} from "./HeaderMenu";

type PropsType = {
    incomeRateFilterChange: (filter: incomeRateFilterType) => void
    incomeSum: number
    rateSum: number
    balance: number
    changeFirstDate: (newDate: string) => void
    changeSecondDate: (newDate: string) => void
    firstDate: string
    secondDate: string
    setThisMonth: () => void
    setLastMonth: () => void
    setThisYear: () => void
    setAllTime: () => void
    openRightWindowMob: () => void
    addCategory: () => void
    onRequestClose: () => void
    changeCurrency: (index: number) => void
    changeTheme: () => void
    currentTheme: boolean
    currencySign: string
    exchangeRate: () => void
    openExchangeWindow: () => void
    changeExchange: (num1: number, num2: number, num3: number, num4: number) => void
    stateExchangeWindow: boolean
    currencyExchangeRate: number[]
    currencyName: string[]
}

export const Header = (props: PropsType) => {

    return (
        <StyledHeader>
            <FlexWrapper direction={"column"}>
                <HeaderMenu currentTheme={props.currentTheme}
                            changeTheme={props.changeTheme}
                            addCategory={props.addCategory}
                            openExchangeWindow={props.openExchangeWindow}
                            changeExchange={props.changeExchange}
                            stateExchangeWindow={props.stateExchangeWindow}
                            currencyExchangeRate={props.currencyExchangeRate}
                            currencyName={props.currencyName}
                            changeCurrency={props.changeCurrency}
                            openRightWindowMob={props.openRightWindowMob}/>
                <ToolsWindow incomeRateFilterChange={props.incomeRateFilterChange}
                             changeFirstDate={props.changeFirstDate}
                             changeSecondDate={props.changeSecondDate}
                             currentTheme={props.currentTheme}
                             firstDate={props.firstDate}
                             secondDate={props.secondDate}
                             setThisMonth={props.setThisMonth}
                             setLastMonth={props.setLastMonth}
                             setThisYear={props.setThisYear}
                             setAllTime={props.setAllTime}
                             incomeSum={props.incomeSum}
                             rateSum={props.rateSum}
                             balance={props.balance}
                             currencySign={props.currencySign}/>
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  i {
    /*color: #BECCE0;*/
    color: #8E6C6B;
    cursor: pointer;
  }

  p {
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }

`










