import React from 'react';
import {styled} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faXmark} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    itemsCategory: string[]
    removeCategory: (name: string) => void
}

export const CategoryList = (props: PropsType) => {

    return (
        <CatList>
            <ul>
                {props.itemsCategory.map((item: string) => {

                        const removeCategoryHandler = () => {
                            props.removeCategory(item)
                        }

                    return(
                        <li><p>{item}</p>
                            <div>
                                <FontAwesomeIcon icon={faXmark} className='deleteButton' onClick={removeCategoryHandler}/>
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

  ul {
    background-color: white;
    overflow-y: scroll;
    max-height: 120px;
    display: flex;
    flex-direction: column;

  }

  ul button {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
  }

  ul li {
    list-style-type: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }


`