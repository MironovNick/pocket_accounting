import React from 'react';
import {styled} from "styled-components";
import {incomeRateFilterType} from "../App";
import {PieChart, Pie, Cell, Sector} from 'recharts';
import {ItemType} from './Main';
import {PieSectorDataItem} from "recharts/types/polar/Pie";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Toggle} from "../components/Toggle";
import {ToolsWindow} from "./MonthButtonWindow";

type PropsType = {
    ItemList: ItemType[]
    incomeRate: incomeRateFilterType
    incomeSum: number
    rateSum: number
    openLeftWindowMob: () => void
    changeTheme: () => void
    currentTheme: boolean
    incomeRateFilterChange: (filter: incomeRateFilterType) => void
    changeFirstDate: (newDate: string) => void
    changeSecondDate: (newDate: string) => void
    firstDate: string
    secondDate: string
    setThisMonth: () => void
    setLastMonth: () => void
    setThisYear: () => void
    setAllTime: () => void
    balance: number
    currencySign: string
    isMobile: boolean
}

export const DonutCharts2 = (props: PropsType) => {

    const renderActiveShape = ({
                                   cx,
                                   cy,
                                   midAngle,
                                   innerRadius,
                                   outerRadius,
                                   startAngle,
                                   endAngle,
                                   fill,
                                   payload,
                                   percent,
                                   value,
                               }: PieSectorDataItem) => {
        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * (midAngle ?? 1));
        const cos = Math.cos(-RADIAN * (midAngle ?? 1));
        const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
        const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
        const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
        const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 20;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} fontSize="25" textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={(outerRadius ?? 0) + 6}
                    outerRadius={(outerRadius ?? 0) + 8}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
                <text x={ex + (cos >= 0 ? 1 : -1) * 6} y={ey} textAnchor={textAnchor}
                      fill={props.currentTheme ? "#BECCE0" : "#8E6C6B"}>{`${value} $`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 6} y={ey} dy={18} textAnchor={textAnchor}
                      fill={props.currentTheme ? "#BECCE0" : "#8E6C6B"}>
                    {`( ${((percent ?? 1) * 100).toFixed(2)}%)`}
                </text>

                /*"#BECCE0" -- dark theme*/
                /*"#8E6C6B" -- light theme*/

            </g>
        );
    };

    const foodSum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'food' ? sum + current.sum : sum, 0);

    const clothesSum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'clothes' ? sum + current.sum : sum, 0);

    const utilitySum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'utility payment' ? sum + current.sum : sum, 0);

    const healthSum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'health care' ? sum + current.sum : sum, 0);

    const educationSum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'education' ? sum + current.sum : sum, 0);

    const vacationSum = props.ItemList.reduce((sum, current) =>
        !current.incomeRate && current.category === 'vacation' ? sum + current.sum : sum, 0);

    const salarySum = props.ItemList.reduce((sum, current) =>
        current.incomeRate && current.category === 'salary' ? sum + current.sum : sum, 0);

    const freelanceSum = props.ItemList.reduce((sum, current) =>
        current.incomeRate && current.category === 'freelance' ? sum + current.sum : sum, 0);

    const giftSum = props.ItemList.reduce((sum, current) =>
        current.incomeRate && current.category === 'gift' ? sum + current.sum : sum, 0);

    const anotherSum = props.ItemList.reduce((sum, current) =>
        current.incomeRate && current.category === 'another income source' ? sum + current.sum : sum, 0);

    const data1 = [
        {name: 'Food', value: foodSum},
        {name: 'Clothes', value: clothesSum},
        {name: 'Utility payment', value: utilitySum},
        {name: 'Health care', value: healthSum},
        {name: 'Education', value: educationSum},
        {name: 'Vacation', value: vacationSum},
    ];

    const data2 = [
        {name: 'salary', value: salarySum},
        {name: 'freelance', value: freelanceSum},
        {name: 'gift', value: giftSum},
        {name: 'another income source', value: anotherSum},
    ];

    const data3 = [
        {name: 'expense', value: props.rateSum},
        {name: 'income', value: props.incomeSum},
    ]

    const data = props.incomeRate === 'rate' ? data1 :
        props.incomeRate === 'income' ? data2 : data3;


    const COLORS =
        ['#0088FE', '#00C49F',
            '#FFBB28', '#FF8042',
            '#B34EE9', '#FF3C53'];

    return (
        <StyledDiagramWindow>
            <RightMenuBar className="menuBarLeft">
                <FontAwesomeIcon icon={faChevronLeft} cursor={'pointer'}
                                 className={props.currentTheme ? "chevronLeftDark" : "chevronLeftLight"}
                                 onClick={props.openLeftWindowMob}/>
                <Toggle changeTheme={props.changeTheme} currentTheme={props.currentTheme}/>
            </RightMenuBar>
            <DonutWindow>

                <PieChart width={600} height={350} margin={{top: -15, right: 5, bottom: 5, left: 5}}>

                    <Pie
                        activeShape={renderActiveShape}
                        data={data}
                        cx={297}
                        cy={200}
                        innerRadius={120}
                        outerRadius={160}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>

                </PieChart>

            </DonutWindow>
            { props.isMobile &&
            <ToolsWindow incomeRateFilterChange={props.incomeRateFilterChange}
                         changeFirstDate={props.changeFirstDate}
                         changeSecondDate={props.changeSecondDate}
                         currentTheme={props.currentTheme}
                         firstDate={props.firstDate}
                         secondDate={props.secondDate}
                         setThisMonth={props.setThisMonth}
                         setLastMonth={props.setLastMonth}
                         setThisYear={props.setThisYear}
                         setAllTime={props.setAllTime}
                         incomeSum={props.incomeSum}
                         rateSum={props.rateSum}
                         balance={props.balance}
                         currencySign={props.currencySign}/>
            }
            <StatisticWindow>
                <div className="statisticWindowItem">
                    <p className="categoryParagraph">salary</p>
                    <p>3</p>
                    <p>2350 $</p>
                </div>
                <div className="statisticWindowItem">
                    <p className="categoryParagraph">freelance</p>
                    <p>1</p>
                    <p>450 $</p>
                </div>
                <div className="statisticWindowItem">
                    <p className="categoryParagraph">another income source</p>
                    <p>1</p>
                    <p>650 $</p>
                </div>

            </StatisticWindow>

        </StyledDiagramWindow>
    )
}

export const StyledDiagramWindow = styled.div`
  width: inherit;

  /*background-color: greenyellow;*/

  .menuBarLeft {
    display: none;
  }

  @media screen and (max-width: 992px) {
    .menuBarLeft {
      display: flex;
    }
  }

  .chevronLeftDark{
    display: none;
    color: #BECCE0;
  }

  .chevronLeftLight{
    display: none;
    color: #8E6C6B;
  }

  @media screen and (max-width: 992px){
    .chevronLeftDark, .chevronLeftLight{
      display: block;
    }
  }

`

export const RightMenuBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: transparent;
`

export const DateBar = styled.div`
  width: inherit;
  height: 40px;
  /*background-color: cornflowerblue;*/
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const Month = styled.p``
export const TotalCost = styled.p``

export const DonutWindow = styled.div`
  width: inherit;
  height: auto;
  /*background-color: mediumpurple;*/
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`

export const StatisticWindow = styled.div`
  width: inherit;
  height: auto;
  
  .statisticWindowItem{
    padding: 8px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    p{
      width: 45%;
      font-size: 19px;
      color: #BECCE0;
      
    }
    
    .categoryParagraph{
      width: 90%;
      font-size: 15px;
      text-align: left;
      text-transform: capitalize;
    }
    
    
  }
  
`

export const Donut = styled.canvas`

  width: inherit;
  max-width: 260px;

`

export const DonutButtonBar = styled.div`
  width: inherit;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #1B2F4A;
    width: 100%;
    height: inherit;
    border: none;
    border-bottom: solid 2px #BECCE0;
    cursor: pointer;
    color: #BECCE0;
    transition: .3s ease-in-out;
  }

  button:hover {
    background-color: #4377EA;
    border-bottom: solid 2px white;
    color: white;
    transition: .3s ease-in-out;
  }
`
