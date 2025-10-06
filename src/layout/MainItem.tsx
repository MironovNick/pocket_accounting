import React from 'react';
import {styled} from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faPen} from "@fortawesome/free-solid-svg-icons";
import {ItemType} from "./Main";

type PropsType = {
    itemList: ItemType[]
    removeCheck: (checkId: string) => void
    editOpen: () => void
    editCurrentCheck: (checkId: string, incomeRate: boolean, sum: number, cat: string, not: string) => void
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
                    <ItemCover>
                        <DateBar>
                            <p>{item.date}</p>
                            <EditDeleteBar>
                                <FontAwesomeIcon icon={faPen} className='editButton' onClick={editCheckHandler} />
                                <FontAwesomeIcon icon={faCircleXmark} className='deleteButton' onClick={removeCheckHandler}/>
                            </EditDeleteBar>
                        </DateBar>
                        <CheckInfo className={item.incomeRate ? "checkInfoIncome" : "checkInfoRate"}>
                            <WrapperItem>
                                <p className="sum">{item.sum} $</p>
                                <p className="category">{item.category}</p>
                                <p className="note">{item.note}</p>
                            </WrapperItem>
                        </CheckInfo>
                    </ItemCover>
                )
                }
            )
        }
        </Item>
    )
}

const Item = styled.div`
  width: 100%;
  padding: 20px 10px 0 10px;

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px;
  
  p{
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
  }
`

const EditDeleteBar = styled.div`

  .editButton, .deleteButton{
    cursor: pointer;
    padding: 0 2px;
    font-size: 14px;
  }
`

const CheckInfo = styled.div`
  margin-bottom: 30px;
  


`


const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 2px solid #D3D3D3;
  color: white;
  padding: 0 10px;
  

  p {
    padding: 5px 0 5px 0;
  }

  .sum{
    color: red;
    font-size: 20px;
  }
`