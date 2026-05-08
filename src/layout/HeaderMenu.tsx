import React from 'react';
import {styled} from "styled-components";
import {Toggle} from "../components/Toggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faList, faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";
import {ExchangeList} from "./ExchangeRateList";
import {CurrencyList} from "./CurrencyList";

type PropsType = {
    currentTheme: boolean
    changeTheme: () => void
    addCategory: () => void
    openExchangeWindow: () => void
    changeExchange: (num1: number, num2: number, num3: number, num4: number) => void
    stateExchangeWindow: boolean
    currencyExchangeRate: number[]
    currencyName: string[]
    changeCurrency: (index: number) => void
    openRightWindowMob: () => void
}

export const HeaderMenu = (props: PropsType) => {

    return(
        <MenuBar>
            <div className={props.currentTheme ? "menuButtonBarDark" : "menuButtonBarLight"}>
                <Toggle changeTheme={props.changeTheme} currentTheme={props.currentTheme}/>
                <FontAwesomeIcon icon={faList}
                                 cursor={'pointer'}
                                 className="addCategory"
                                 title="Add category"
                                 onClick={props.addCategory}
                />
                <FontAwesomeIcon icon={faMoneyCheckDollar}
                                 cursor={'pointer'}
                                 className="exchangeRate"
                                 onClick={props.openExchangeWindow}
                />
                <ExchangeList changeExchange={props.changeExchange}
                              stateExchangeWindow={props.stateExchangeWindow}
                              currencyExchangeRate={props.currencyExchangeRate}
                              currencyName={props.currencyName}
                />
                <CurrencyList changeCurrency={props.changeCurrency} currentTheme={props.currentTheme}/>
            </div>
            <FontAwesomeIcon icon={faChevronRight}
                             cursor={'pointer'}
                             className={props.currentTheme ? "chevronRightDark" : "chevronRightLight"}
                             onClick={props.openRightWindowMob}/>
        </MenuBar>
    )

}

export const MenuBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;


  .menuButtonBarLight {
    display: flex;
    align-items: center;
    color: #8E6C6B;
  }

  .menuButtonBarDark {
    display: flex;
    align-items: center;
    color: #BECCE0;
  }

  .addCategory {
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .exchangeRate {
    font-size: 19px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .chevronRightDark {
    display: none;
    color: #BECCE0;
  }

  .chevronRightLight {
    display: none;
    color: #8E6C6B;
  }

  @media screen and (max-width: 992px) {
    .chevronRightDark, .chevronRightLight {
      display: block;
    }
  }

  .ExchangeRateListWindow {

  }

`