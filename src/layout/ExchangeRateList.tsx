import React from 'react';
import {styled} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";

const currencyExchangeRate = [1, 2.8, 0.85, 0.75]
const currencyItems = ['USD', 'BYN', 'EUR', 'GBP']

type PropsType = {}

export const ExchangeList = (props: PropsType) => {
    return (
        <ExchangeRateList>
            <div className="exchangeRate">
                <div className="exchangeRateItem">
                    <label htmlFor="Income">USD</label>
                    <input type="text" value={1}/>
                </div>
                <div className="exchangeRateItem">
                    <label htmlFor="Income">BYN</label>
                    <input type="text" value={2.8}/>
                </div>
                <div className="exchangeRateItem">
                    <label htmlFor="Income">EUR</label>
                    <input type="text" value={0.85}/>
                </div>
                <div className="exchangeRateItem">
                    <label htmlFor="Income">GBP</label>
                    <input type="text" value={0.75}/>
                </div>
            </div>
        </ExchangeRateList>
    )

}

export const ExchangeRateList = styled.div`
  position: inherit;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  border: 1px solid red;

  .exchangeRate {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
  }

  label {
    padding: 0 0 0 0;
    margin: 0 10px 0 0;
  }

  input {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    width: 50px;
  }

  .exchangeRateItem{
    padding: 0 0 0 0;
    margin: 0 0 0 0;
  }


`