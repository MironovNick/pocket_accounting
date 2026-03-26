import React, {ChangeEvent, useState} from 'react';
import {styled} from "styled-components";
import {ModalWrapper} from "./ModalWindow";
import {CategoryList} from "./CategoryList";

type PropsType = {
    closeModal: () => void
    itemsIncome: string[]
    itemsRate: string[]
    addIncome: (name: string) => void
    addRate: (name: string) => void
    removeIncome: (name: string) => void
    removeRate: (name: string) => void
}

export const AddCategoryModalWindow = (props: PropsType) => {

    const [newCategoryName, setNewCategoryName] = useState("")

    const setNewCategoryNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCategoryName(event.currentTarget.value)
    }

    const [radioCheck, setRadioCheck] = useState("Income");

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRadioCheck(e.currentTarget.value);
    };

    const handlerAdd = () => {
        if(newCategoryName === "")
            return
        if(radioCheck == "Income")
            props.addIncome(newCategoryName)
        else
            props.addRate(newCategoryName)
    }

    const itemsCategory = radioCheck == "Income" ? props.itemsIncome : props.itemsRate

    const removeCategory = radioCheck == "Income" ? props.removeIncome : props.removeRate

    return (
        <ModalWrapper>

            <AddCategoryWindow>
                <form>
                    <label htmlFor="fname">Price:</label>
                    <input type="radio"
                           id="Income"
                           name="category"
                           value="Income"
                           onChange={handlerChange} defaultChecked/>
                    <label htmlFor="Income">Income</label>
                    <input type="radio"
                           id="Expense"
                           name="category"
                           value="Expense"
                           onChange={handlerChange} />
                    <label htmlFor="Expense">Expense</label><br/>
                    <label htmlFor="fname">Category:</label>
                    <input type="text" value={newCategoryName} onChange={setNewCategoryNameHandler}/><br/>
                </form>
                <div className="modal-body-button-bar">
                    <button className="confirm-button" onClick={handlerAdd}>confirm</button>
                    <button className="cancel-button" onClick={props.closeModal}>cancel</button>
                </div>
                <div>
                    <CategoryList itemsCategory={itemsCategory}
                                  removeCategory={removeCategory}/>
                </div>
            </AddCategoryWindow>

        </ModalWrapper>
    )
}

export const AddCategoryWindow = styled.div`
  width: 350px;
  min-height: 168px;
  height: auto;
  background: #1B2F4A;
  border: 1px solid #2A4A74;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  margin: 200px auto;
  padding: 10px 10px;
  color: #BECCE0;
  display: flex;
  flex-direction: column;
  align-items: center;
`