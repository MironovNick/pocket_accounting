import React, {ChangeEvent} from 'react';
import {styled} from "styled-components";
import {FlexWrapper} from "../components/Wrapper";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faList} from "@fortawesome/free-solid-svg-icons";
import {incomeRateFilterType} from "../App";
import {Toggle} from "../components/Toggle";
import {CurrencyList} from "./CurrencyList";

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
}

export const Header = (props: PropsType) => {

    const incomeFilterChangeHandler = () => {
        props.incomeRateFilterChange('income')
    }

    const rateFilterChangeHandler = () => {
        props.incomeRateFilterChange('rate')
    }

    const allFilterChangeHandler = () => {
        props.incomeRateFilterChange('all')
    }

    const changeFirstDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeFirstDate(event.currentTarget.value)
    }

    const changeSecondDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeSecondDate(event.currentTarget.value)
    }

    return (
        <StyledHeader>
            <FlexWrapper direction={"column"}>
                <MenuBar>
                    <div className={props.currentTheme ? "menuButtonBarDark" : "menuButtonBarLight"}>
                        <Toggle changeTheme={props.changeTheme}/>
                        <FontAwesomeIcon icon={faList}
                                         cursor={'pointer'}
                                         className="addCategory"
                                         title="Add category"
                                         onClick={props.addCategory}
                        />
                        <CurrencyList changeCurrency={props.changeCurrency} currentTheme={props.currentTheme}/>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight}
                                     cursor={'pointer'}
                                     className="chevronRight"
                                     onClick={props.openRightWindowMob}/>
                </MenuBar>
                <MonthBar>
                    <input type="date"
                           className={props.currentTheme ? "inputDark" : "inputLight"}
                           id="firstDate"
                           value={props.firstDate}
                           onChange={changeFirstDateHandler}/>
                    <input type="date"
                           className={props.currentTheme ? "inputDark" : "inputLight"}
                           id="secondDate"
                           value={props.secondDate}
                           onChange={changeSecondDateHandler}/>
                </MonthBar>
                <ButtonBar>
                    <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={props.setThisMonth}>This month</button>
                    <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={props.setLastMonth}>Last month</button>
                    <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={props.setThisYear}>This year</button>
                    <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={props.setAllTime}>All time</button>
                </ButtonBar>
                <RateBar >
                    <div className={props.currentTheme ? "rateBarDark" : "rateBarLight"}>
                        <p>Income</p>
                        <p>{Math.round(props.incomeSum * 100)/100} $</p>
                    </div>
                </RateBar>
                <RateBar>
                    <div className={props.currentTheme ? "rateBarDark" : "rateBarLight"}>
                        <p>Expense</p>
                        <p>{Math.round(props.rateSum * 100)/100} $</p>
                    </div>
                </RateBar>
                <RateBar>
                    <div className={props.currentTheme ? "rateBarDark" : "rateBarLight"}>
                        <p>Balance</p>
                        <p>{Math.round(props.balance * 100)/100} $</p>
                    </div>
                </RateBar>

            </FlexWrapper>
            <ButtonBar>
                <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={allFilterChangeHandler}>All</button>
                <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={incomeFilterChangeHandler}>Income</button>
                <button className={props.currentTheme ? "buttonDark" : "buttonLight"} onClick={rateFilterChangeHandler}>Expense</button>
            </ButtonBar>
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

export const MenuBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;


  .menuButtonBarLight{
    display: flex;
    align-items: center;
    color: #8E6C6B;
  }

  .menuButtonBarDark{
    display: flex;
    align-items: center;
    color: #BECCE0;
  }
  
  .addCategory{
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .chevronRight{
    display: none;
  }

  @media screen and (max-width: 992px){
    .chevronRight{
      display: block;
    }
  }
  
`

const MonthBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;

  input[type="date"] {
    padding: 5px 5px;
    border: none;
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    transition: .2s ease-in-out;
  }

  .inputDark {
    color: #BECCE0;
    background-color: #1B2F4A;
    transition: .2s ease-in-out;
  }

  .inputLight {
    background-color: rgba(231, 222, 223, 0.85);
    color: #8E6C6B;
    transition: .2s ease-in-out;
  }

  ::-webkit-calendar-picker-indicator {
    /*background-color: #BECCE0;*/
    background-color: #F9EFF0;
    border-radius: 3px;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

  ::-webkit-calendar-picker-indicator:hover {
    background-color: white;
    border-radius: 3px;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

`

const RateBar = styled.div`
  width: 416px;
  height: auto;
  display: flex;
  padding: 8px 10px;

  .rateBarDark{
    width: inherit;
    color: #BECCE0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .rateBarLight{
    width: inherit;
    color: #8E6C6B;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
`

const ButtonBar = styled.div`
  width: 416px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: inherit;
    border: none;
    cursor: pointer;
    transition: .2s ease-in-out;
  }
  
  .buttonDark{
    background-color: #1B2F4A;
    border-bottom: solid 2px #BECCE0;
    color: #BECCE0;
  }

  .buttonDark:hover{
    background-color: #4377EA;
    border-bottom: solid 2px white;
    color: white;
    transition: .2s ease-in-out;
  }
  
  .buttonLight{
    background-color: rgba(231, 222, 223, 0.85);
    border-bottom: solid 2px #F9EFF0;
    color: #8E6C6B;
  }

  .buttonLight:hover{
    background-color: #D8605A;
    border-bottom: solid 2px white;
    color: white;
    transition: .2s ease-in-out;
  }

`






