import React from 'react';
import {styled} from "styled-components";

type PropsType = {
    stateExchangeWindow: boolean
    changeExchange: (num1: number, num2: number, num3: number, num4: number) => void
    currencyExchangeRate: number[]
    currencyName: string[]
}

export const ExchangeList = (props: PropsType) => {

    const changeExchangeHandler = () => {
        props.changeExchange(1, 2.85, 0.88, 0.79)
    }

    return (
        <ExchangeRateList>

            <div className={props.stateExchangeWindow ? "ExchangeRateListDark" : "ExchangeRateListDarkNone"}>

                <div className="exchangeRateItem">
                    <div className="currencyBlock">
                        {props.currencyName.map((item: string) => {
                                return (
                                    <p>{item}</p>
                                )
                            }
                        )
                        }
                    </div>
                    <div className="rateBlock">
                        {props.currencyExchangeRate.map((item: number) => {
                                return (
                                    <input type="number" value={item}/>
                                )
                            }
                        )
                        }
                    </div>
                </div>

                <button onClick={changeExchangeHandler}>confirm</button>

            </div>


        </ExchangeRateList>
    )

}

export const ExchangeRateList = styled.div`

  .ExchangeRateListDark {
    display: block;
    position: absolute;
    background-color: #1B2F4A;
    border: 1px solid #2A4A74;
    color: #BECCE0;
    padding: 0 0 5px 0;
    margin: 15px 0 0 -35px;
    width: 150px;
    transition: .2s
      ease - in -out;
  }

  .ExchangeRateListLight {
    display: block;
    position: absolute;
    background-color: #EBCBBB;
    border: 1px solid #F9EFF0;
    color: #8E6C6B;
    padding: 0 0 5px 0;
    margin: 15px 0
      0 - 35
    px;
    width: 150px;
    transition: .2s
      ease - in -out;
  }

  .ExchangeRateListDarkNone {
    display: none;
    transition: .2s
      ease - in -out;
  }

  label {
    padding: 0 0 0 0;
    margin: 0 10px 0 0;
  }

  input {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    width: 80px;
  }

  .exchangeRateItem {
    padding: 2px 0 2px 0;
    margin: 0 0 0 0;
    display: flex;
  }

  .currencyBlock {
    display: block;
  }

  p {
    margin: 4px 0 0 5px;
  }

  button {
    width: 80px;
    cursor: pointer;
  }

`