import React, {ChangeEvent} from 'react';
import {styled} from "styled-components";
import {FlexWrapper} from "../components/Wrapper";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {incomeRateFilterType} from "../App";

type PropsType = {
    incomeRateFilterChange: (filter: incomeRateFilterType) => void
    incomeSum: number
    rateSum: number
    changeFirstDate: (newDate: string) => void
    changeSecondDate: (newDate: string) => void
    firstDate: string
    secondDate: string
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
                </MenuBar>
                <MonthBar>
                    <FontAwesomeIcon icon={faChevronLeft} cursor={'pointer'}/>
                        <input type="date" id="firstDate" value={props.firstDate} onChange={changeFirstDateHandler}/>
                        <input type="date" id="secondDate" value={props.secondDate} onChange={changeSecondDateHandler}/>
                    <FontAwesomeIcon icon={faChevronRight} cursor={'pointer'}/>
                </MonthBar>
                <RateBar>
                    <p>Income</p>
                    <p>{props.incomeSum} $</p>
                </RateBar>
                <IncomeBar>
                    <p>Rate</p>
                    <p>{props.rateSum} $</p>
                </IncomeBar>
                <ButtonBar>
                    <button onClick={allFilterChangeHandler}>All</button>
                    <button onClick={incomeFilterChangeHandler}>Income</button>
                    <button onClick={rateFilterChangeHandler}>Rate</button>
                </ButtonBar>
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  i {
    color: white;
    cursor: pointer;
  }

  p {
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
  }
`

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #2DFCFF;
`

const MonthBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFDD00;
  border-top: 2px solid #D3D3D3;
  padding: 0 10px;
  color: white;

  i {
    color: white;
    cursor: pointer;
  }
`

const RateBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #00FFA9;
  border-top: 2px solid #D3D3D3;
  color: white;
  padding: 0 10px;
`

const IncomeBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FF00AE;
  border-top: 2px solid #D3D3D3;
  color: white;
  padding: 0 10px;
`

const ButtonBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2DFCFF;
  border-top: 2px solid #D3D3D3;
  color: white;
  padding: 0 10px;

  button {
    width: 33%;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    padding: 5px 25px;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin: 0 5px;
    background-color: #4377EA;
    //border: 2px solid #D3D3D3;
  }

`




