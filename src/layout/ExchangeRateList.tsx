import React, {ChangeEvent, useState} from 'react';
import {styled} from "styled-components";

type PropsType = {
    stateExchangeWindow: boolean
    changeExchange: (num1: number, num2: number, num3: number, num4: number) => void
    currencyExchangeRate: number[]
    currencyName: string[]
}

export const ExchangeList = (props: PropsType) => {

    const changeExchangeHandler = () => {
        props.changeExchange(currencyRate1, currencyRate2, currencyRate3, currencyRate4)
    }

    const [currencyRate1, setCurrencyRate1] = useState(props.currencyExchangeRate[0])

    const changeCurrencyRate1Handler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrencyRate1(Number(event.currentTarget.value))
    }

    const [currencyRate2, setCurrencyRate2] = useState(props.currencyExchangeRate[1])

    const changeCurrencyRate2Handler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrencyRate2(Number(event.currentTarget.value))
    }

    const [currencyRate3, setCurrencyRate3] = useState(props.currencyExchangeRate[2])

    const changeCurrencyRate3Handler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrencyRate3(Number(event.currentTarget.value))
    }

    const [currencyRate4, setCurrencyRate4] = useState(props.currencyExchangeRate[3])

    const changeCurrencyRate4Handler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrencyRate4(Number(event.currentTarget.value))
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
                        <form>
                            <input type="number" id="in1" value={currencyRate1} onChange={changeCurrencyRate1Handler}/>
                            <input type="number" id="in2" value={currencyRate2} onChange={changeCurrencyRate2Handler}/>
                            <input type="number" id="in3" value={currencyRate3} onChange={changeCurrencyRate3Handler}/>
                            <input type="number" id="in4" value={currencyRate4} onChange={changeCurrencyRate4Handler}/>
                        </form>
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