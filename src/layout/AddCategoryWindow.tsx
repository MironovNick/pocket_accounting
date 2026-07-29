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
    currentTheme: boolean
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
        if (newCategoryName === "")
            return
        if (radioCheck == "Income")
            props.addIncome(newCategoryName)
        else
            props.addRate(newCategoryName)
    }

    const itemsCategory = radioCheck == "Income" ? props.itemsIncome : props.itemsRate

    const removeCategory = radioCheck == "Income" ? props.removeIncome : props.removeRate

    return (
        <ModalWrapper>

            <AddCategoryWindow>
                <div className={props.currentTheme ? "addCategoryWindowDark" : "addCategoryWindowLight"}>
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
                               onChange={handlerChange}/>
                        <label htmlFor="Expense">Expense</label><br/>
                        <label htmlFor="fname">Category:</label>
                        <input type="text" value={newCategoryName} onChange={setNewCategoryNameHandler}/><br/>
                    </form>
                    <div className="modal-body-button-bar">
                        <button
                            className={newCategoryName === '0' || newCategoryName === '' ? 'error-button' : "confirm-button"}
                            onClick={handlerAdd}>confirm
                        </button>
                        <button className="cancel-button" onClick={props.closeModal}>cancel</button>
                    </div>
                    <div className="categoryList">
                        <CategoryList itemsCategory={itemsCategory}
                                      removeCategory={removeCategory}
                                      currentTheme={props.currentTheme}
                        />
                    </div>
                </div>
            </AddCategoryWindow>

        </ModalWrapper>
    )
}

export const AddCategoryWindow = styled.div`

  input[type="text"] {
    margin: 8px 0 0 0;
    padding: 2px;
    font-size: 15px;
    width: 180px;
  }

  .addCategoryWindowDark {
    background: #1B2F4A;
    border: 1px solid #2A4A74;
    color: #BECCE0;
    width: 350px;
    min-height: 168px;
    height: auto;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
    margin: 200px auto;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="radio"] {
      accent-color: #BECCE0;
      width: 15px;
      height: 15px;
    }

    input[type="text"] {
      background-color: #BECCE0;
      border: 1px solid #2A4A74;
      color: #2A4A74;
    }
  }

  .addCategoryWindowLight {
    background: rgba(231, 222, 223, 0.85);
    border: 1px solid #8E6C6B;
    color: #8E6C6B;
    width: 350px;
    min-height: 168px;
    height: auto;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
    margin: 200px auto;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="radio"] {
      accent-color: #8E6C6B;
      width: 15px;
      height: 15px;
    }

    input[type="text"] {
      background-color: rgba(231, 222, 223, 0.85);
      border: 1px solid #8E6C6B;
      color: #8E6C6B;
    }

  }

  form {
    padding: 5px 0 0 0;
  }

  label {
    margin: 5px 10px 0 3px;
  }

  .modal-body-button-bar {
    margin: 15px 0 10px 0;

    button {
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

    .confirm-button {
      background-color: #4377EA;
    }

    .cancel-button {
      background-color: #FF8B74;
    }

    .error-button {
      background-color: #B4B4B4;
      pointer-events: none;
    }


  }

  .categoryList {
    width: 100%;
    padding: 0 20px 0 20px;

  }




`