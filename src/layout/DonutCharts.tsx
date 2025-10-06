import React from 'react';
import {styled} from "styled-components";

export const DonutCharts = () => {

    return (
        <div>
            <DateBar>
                <Month>September</Month>
                <TotalCost>-700$</TotalCost>
            </DateBar>
            <DonutWindow>


                <Donut>
                    <div className="donut"></div>
                </Donut>

            </DonutWindow>
            <DonutButtonBar>
                <DonutButton className="ButtonActive">Rate</DonutButton>
                <DonutButton className="ButtonInactive">Income</DonutButton>
            </DonutButtonBar>
        </div>
    )


}

export const DateBar = styled.div`
  width: inherit;
  height: 40px;
  background-color: cornflowerblue;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Month = styled.p``
export const TotalCost = styled.p``

export const DonutWindow = styled.div`
  
  --food: #3590eb;
  --clothes: #ee82cf; 
  --utility_payment: #ff0000; 
  --health_care: #ffdd00; 
  --education: #00ffa9; 
  --vacation: #0a00d0;
  
  
  width: inherit;
  height: 262px;
  background-color: mediumpurple;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const Donut = styled.figure`
  width: 260px;
  height: 260px;
  background-color: gainsboro;
  display: flex;
  place-content: center;
  flex-flow: wrap;
  gap: 2rem;
  
  .pie{
    flex: 1 0 205px;
    max-width: 260px;
    aspect-ratio: 1;
    border: 2px solid;
    border-radius: 50%;
    background-image: conic-gradient( from 10deg, 
    var(--food) 40%, 
    var(--clothes) 0 55%, 
    var(--utility_payment) 0 75%, 
    var(--health_care) 0 90%, 
    var(--education) 0 94%,
    var(--vacation) 0);
  }

  .donut{
    flex: 1 0 205px;
    max-width: 261px;
    aspect-ratio: 1;
    border: 2px solid;
    border-radius: 50%;
    background-image: 
            radial-gradient(white 0 40%, transparent 40% 70%, white 70%),
            conic-gradient( from 10deg, var(--food) 40%, var(--clothes) 0 55%, var(--utility_payment) 0 75%, var(--health_care) 0 90%, var(--education) 0 94%, var(--vacation) 0);
  }
  
`
export const DonutButtonBar = styled.div`
  width: inherit;
  height: 40px;
  background-color: lightblue;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`

export const DonutButton = styled.button`
  background-color: lightslategrey;
  width: 100%;
  height: inherit;
  border: none;
  border-bottom: solid 2px red;
  cursor: pointer;
`
