import React, {useState} from 'react';
import {styled} from "styled-components";

type PropsType = {
    changeTheme: () => void
}

export const Toggle = (props: PropsType) => {

    const [toggled, setToggled] = useState(false)

    const changeTheme = () => {
        setToggled(!toggled)
        props.changeTheme()
    }

    return(
        <ToggleButton title="Change theme">
            <button className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={changeTheme}>
                <div className={"thumb"}></div>
            </button>
        </ToggleButton>
    )

}

const ToggleButton = styled.div `
  
  .toggle-btn {
    background-color: #ADAFB1;
    border: #ffffff;
    border-radius: 99px;
    width: 58px;
    height: 28px;
    transition: background-color 0.1s ease, border-color 0.2s ease;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.748);
    position: relative;
    padding: 0 0 0 0;
    display: block;
  }

  .toggle-btn-left{
    display: none;
  }
  
  .thumb {
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border-radius: 99px;
    transition: left 0.15s ease;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  .toggle-btn.toggled{
    /*background-color: #0088FE;*/
    background-color: #FFA86A;
  }
  
  .toggle-btn.toggled .thumb{
    left: calc(50px - 15px)
  }
  
`