import React, {ChangeEvent, useState} from 'react';
import {styled} from "styled-components";
import {v1} from "uuid";
import {ItemType} from "./Main";
import {checkType} from "../App";

const checkId = v1();

type PropsType = {
    operationType: checkType
    currentCheck: ItemType
    addCheck: (sum: number, incomeRate: boolean, cat: string, not: string, date: string) => void
    closeModal: () => void
    editCheck: (checkId: string, sum: number, cat: string, not: string) => void
    menuItems: string[]
}

export const ModalWindow = (props: PropsType) => {

    const [checkPrice, setCheckPrice] = useState(props.operationType == 'edit' ? props.currentCheck.sum : '0')
    const [checkCategory, setCheckCategory] = useState(props.operationType == 'edit' ? props.currentCheck.category : props.menuItems[0])
    const [checkNote, setCheckNote] = useState(props.operationType == 'edit' ? props.currentCheck.note : '')

    const changeCheckPriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckPrice(event.currentTarget.value)
    }
    const changeCheckCategoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setCheckCategory(event.currentTarget.value)
    }
    const changeCheckNoteHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckNote(event.currentTarget.value)
    }

    /*const date = new Date();
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${dayOfMonth} ${monthName}`;*/

    const formattedDate = (new Date()).toISOString().substring(0,10);

    const OkButtonHandler = () => {
        if(props.operationType != 'edit') addNewCheck();
        else editCheckHandler();
    }

    /*const addNewCheck = () => {
        props.addCheck(Number(checkPrice), checkCategory, checkNote, formattedDate);
        props.closeModal();
    }*/

    const addNewCheck = () => {
        props.addCheck(Number(checkPrice), props.operationType === "income" ? true : false, checkCategory, checkNote, formattedDate);
        props.closeModal();
    }

    const editCheckHandler = () => {
        props.editCheck(props.currentCheck.id, Number(checkPrice), checkCategory, checkNote);
        props.closeModal();
    }

    const buttonName = props.operationType === 'edit' ? 'confirm check' : 'new check'

    return (
        <ModalWrapper id="open_modal_body" className = 'ModalBody'>

            <AddWindow>

                <form>
                    <label htmlFor="fname">Price:</label>
                    <input type="text" id="fname" name="fname" value={checkPrice} onChange={changeCheckPriceHandler}/><br />
                    <label htmlFor="lname">Category:</label>
                    <select value={checkCategory} onChange={changeCheckCategoryHandler}>
                        {props.menuItems.map((item: string, index: number) => {
                                return (
                                    <option key={index} >
                                        {item}
                                    </option>
                                )
                            }
                        )
                        }
                    </select><br />
                    <label htmlFor="lname">Note:</label>
                    <input type="text" id="lname" name="lname" value={checkNote} onChange={changeCheckNoteHandler}/><br />
                </form>
                <div className="modal-body-button-bar">
                    <button className={checkPrice === '0' || checkPrice === '' ? 'error-add-check-button' : "add-check-button" } onClick={OkButtonHandler}>{buttonName}</button>
                    <button className="cancel-button" onClick={props.closeModal}>cancel</button>
                </div>

            </AddWindow>

        </ModalWrapper>
    )
}

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 0.3s, visibility 0.2s linear 0.1s;
  -moz-transition: opacity 0.3s, visibility 0.2s linear 0.1s;
  transition: opacity 0.3s, visibility 0.2s linear 0.1s;
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  /*.ModalBody:target {
    visibility: visible;
    opacity: 1;
  }*/
`

export const AddWindow = styled.div`
  width: 350px;
  height: auto;
  background: #FFFFFF;
  border: 1px solid rgba(35, 110, 255, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  margin: 200px auto;
  padding: 10px 10px;

  form{
    padding: 15px 0;
    text-align: left;
  }

  label{
    margin: 5px 0;
  }

  input{
    margin: 5px 15px;
  }

  button{
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    padding: 5px 25px;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin: 0 10px;
  }

  .add-check-button {
    background-color: #4377EA;
  }
  
  .error-add-check-button{
    background-color: #B4B4B4;
    pointer-events: none;
  }

  .cancel-button {
    background-color: #FF8B74;
    padding: 5px 40px;
  }
`