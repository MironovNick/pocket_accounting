import React from 'react';
import {styled} from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faPen, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ItemType} from "./Main";

type PropsType = {
    itemList: ItemType[]
    removeCheck: (checkId: string) => void
    editOpen: () => void
    editCurrentCheck: (checkId: string, incomeRate: boolean, sum: number, cat: string, not: string) => void
    currencyExchangeRate: number
    currentTheme: boolean
    currencySign: string
}

export const MainItem = (props: PropsType) => {

    return(<Item>

        {props.itemList.map((item: ItemType) => {

                const removeCheckHandler = () => {
                    props.removeCheck(item.id)
                }

                const editCheckHandler = () => {
                    props.editCurrentCheck(item.id, item.incomeRate, item.sum, item.category, item.note);
                    props.editOpen()
                }

                return (
                    <div>

                    <ItemCover>
                        <CheckInfo >
                            <CheckTypeBar className={item.incomeRate ? "checkInfoIncome" : "checkInfoRate"}/>
                            <WrapperItem>
                                <div className={props.currentTheme ? "ItemDark" : "ItemLight"}>
                                    <DateBar>
                                        <p>{item.date}</p>
                                        <EditDeleteBar>
                                            <FontAwesomeIcon icon={faPen} className='editButton' onClick={editCheckHandler} />
                                            <FontAwesomeIcon icon={faXmark} className='deleteButton' onClick={removeCheckHandler}/>
                                        </EditDeleteBar>
                                    </DateBar>
                                    <div className='categorySumBar'>
                                        <p className="category">{item.category}</p>
                                        <p className="sum">{Math.round(item.sum * props.currencyExchangeRate * 100)/100} {props.currencySign}</p>
                                    </div>
                                    <p className="note">{item.note}</p>
                                </div>
                            </WrapperItem>
                        </CheckInfo>
                    </ItemCover>
                    </div>
                )
                }
            )
        }
        </Item>
    )
}

const Item = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px 0 10px;
  border-radius: 15px;
  

  .checkInfoIncome {
    background-color: #64FFAF;
  }

  .checkInfoRate {
    background-color: #FF7174;
  }
`

const ItemCover = styled.div`

`

const DateBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  p{
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 15px;
  }
`

const EditDeleteBar = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  
  .editButton{
    cursor: pointer;
    padding: 0 8px 0 0;
    font-size: 14px;
  }
  
  .deleteButton{
    cursor: pointer;
    padding: 0 0 0 0;
    font-size: 20px;
  }
`

const CheckInfo = styled.div`
  margin-bottom: 30px;
  display: flex;
  transition: .1s ease-in-out;
`

const CheckTypeBar = styled.div`
  width: 10px;
  height: inherit;
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px;
`


const WrapperItem = styled.div`
  width: 100%;

  .ItemDark {
    background-color: #1B2F4A;
    border: 1px solid #2A4A74;
    color: #BECCE0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-left: none;
    padding: 0 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .2s ease-in-out;
  }

  .ItemLight {
    background-color: rgba(231, 222, 223, 0.5);
    border: 1px solid #F9EFF0;
    color: #8E6C6B;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-left: none;
    padding: 0 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .2s ease-in-out;
  }

  .categorySumBar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    height: auto;
    padding: 5px 0 5px 0;
    text-align: left;
  }

  .sum {
    color: red;
    font-size: 16px;
    font-weight: 500;
  }
`