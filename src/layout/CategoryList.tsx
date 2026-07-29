import React from 'react';
import {styled} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    itemsCategory: string[]
    removeCategory: (name: string) => void
    currentTheme: boolean
}

export const CategoryList = (props: PropsType) => {

    return (
        <CatList>
            <ul className={props.currentTheme ? "ulDark" : "ulLight"}>
                {props.itemsCategory.map((item: string) => {

                        const removeCategoryHandler = () => {
                            props.removeCategory(item)
                        }

                        return (
                            <li><p>{item}</p>
                                <div>
                                    <FontAwesomeIcon icon={faXmark} className='deleteButton'
                                                     onClick={removeCategoryHandler}/>
                                </div>

                            </li>
                        )
                    }
                )
                }
            </ul>
        </CatList>
    )
}

export const CatList = styled.div`


  .ulDark {
    background-color: #BECCE0;
    overflow-y: scroll;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  .ulDark::-webkit-scrollbar {
    width: 8px;
    background-color: #BECCE0;
  }

  .ulDark::-webkit-scrollbar-track {
    background-color: #BECCE0;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .ulDark::-webkit-scrollbar-thumb {
    background-color: #9CB0CB;
    border-radius: 4px;
  }

  .ulDark::-webkit-scrollbar-thumb:hover {
    background-color: #647893;
  }

  .ulDark li {
    text-transform: capitalize;
    font-size: 16px;
    list-style-type: none;
    color: #1B2F4A;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3px 0 3px 3px;
  }


  .ulLight {
    background-color: rgba(231, 222, 223, 0.85);
    overflow-y: scroll;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  .ulLight::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(231, 222, 223, 0.85);
  }

  .ulLight::-webkit-scrollbar-track {
    background-color: rgba(231, 222, 223, 0.85);
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .ulLight::-webkit-scrollbar-thumb {
    background-color: #B79594;
    border-radius: 4px;
  }

  .ulLight::-webkit-scrollbar-thumb:hover {
    background-color: #8E6C6B;
  }

  .ulLight li {
    text-transform: capitalize;
    font-size: 16px;
    list-style-type: none;
    color: #8E6C6B;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3px 0 3px 3px;
  }


  .deleteButton {
    margin: 0 3px 0 0;
    cursor: pointer;
  }




`