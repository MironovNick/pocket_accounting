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
import {v1} from "uuid";
import {ExchangeList} from "./ExchangeRateList";
import {CurrencyList} from "./CurrencyList";

type chartType1 = {
    name: string
    value: number
}

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
    changeExchange: (num1: number, num2: number, num3: number, num4: number) => void
    stateExchangeWindow: boolean
    currencyName: string[]
    currencyExchangeRateNum: number
    currencyExchangeRate: number[]
    changeCurrency: (index: number) => void
    currencyIndex: number
}

export const DonutCharts = (props: PropsType) => {

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
                      fill={props.currentTheme ? "#BECCE0" : "#8E6C6B"}>{Math.round(value * props.currencyExchangeRateNum * 100)/100} {props.currencySign}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 6} y={ey} dy={18} textAnchor={textAnchor}
                      fill={props.currentTheme ? "#BECCE0" : "#8E6C6B"}>
                    {`( ${((percent ?? 1) * 100).toFixed(2)}%)`}
                </text>

                /*"#BECCE0" -- dark theme*/
                /*"#8E6C6B" -- light theme*/

            </g>
        );
    };

 const ItemList: ItemType[] = props.incomeRate !== "all" ? Object.values(
  props.ItemList.reduce<Record<string, ItemType>>((acc, current) => {
    const key = current.category;

    if (acc[key]) {
      // Если категория уже есть, просто плюсуем сумму
      acc[key].sum += current.sum;
      const cnt = Number(acc[key].note) + 1
      acc[key].note = cnt.toString()
    } else {
      // Если категории нет, создаем новую запись.
      // Генерируем новый id (вызовом v1()), чтобы он не дублировал старый.
      acc[key] = {
        id: v1(), // или current.id, если вам важно оставить id первого элемента
        incomeRate: current.incomeRate,
        sum: current.sum,
        category: current.category,
        note: "1",
        date: ""

      };
    }
    return acc;
  }, {})
) : [];

ItemList.sort((a, b) => b.sum - a.sum)

const data0: chartType1[] = []
const item0: chartType1 = {name: "other categories", value: 0}

for (let i = 0; i < ItemList.length; i++) {
    if(i < 5) {
        data0.push({name: ItemList[i].category, value: ItemList[i].sum})
    } else {
        item0.value += ItemList[i].sum
        if(i >= (ItemList.length-1))
           data0.push(item0) 
    }
}

    const data3 = [
        {name: 'expense', value: props.rateSum},
        {name: 'income', value: props.incomeSum},
    ]

    const data = props.incomeRate === 'all' ? data3 : data0


    const COLORS =
        ['#0088FE', '#00C49F',
            '#FFBB28', '#FF8042',
            '#B34EE9', '#FF3C53'];

    return (
        <StyledDiagramWindow>

            <RightMenuBar className="menuBarLeft">
                <div className="leftIconBar">
                <FontAwesomeIcon icon={faChevronLeft} cursor={'pointer'}
                                 className={props.currentTheme ? "chevronLeftDark" : "chevronLeftLight"}
                                 onClick={props.openLeftWindowMob}/>
                <CurrencyList changeCurrency={props.changeCurrency}
                              currentTheme={props.currentTheme}
                              currencyIndex={props.currencyIndex}
                />
                </div>
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
                {ItemList.map((item: ItemType) => {
                    return (
                        <div className="statisticWindowItem">
                            <p className={props.currentTheme ? "categoryFirstParagraphDark" : "categoryFirstParagraphLight"}>{item.category}</p>
                            <p className={props.currentTheme ? "paragraphDark" : "paragraphLight"}>{item.note}</p>
                            <p className={props.currentTheme ? "priceParagraphDark" : "priceParagraphLight"}>{Math.round(item.sum * props.currencyExchangeRateNum * 100)/100} {props.currencySign}</p>
                        </div>
                    )
                }
                )
                }

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
    margin-right: 10px;
  }

  .chevronLeftLight{
    display: none;
    color: #8E6C6B;
    margin-right: 10px;
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
  
  .leftIconBar{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
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
    
    .paragraphDark{
      width: 50%;
      font-size: 19px;
      color: #BECCE0;
    }

    .paragraphLight{
      width: 50%;
      font-size: 19px;
      color: #8E6C6B;
    }
    
    .categoryFirstParagraphDark{
      width: 45%;
      font-size: 15px;
      text-align: left;
      text-transform: capitalize;
      color: #BECCE0;
    }

    .categoryFirstParagraphLight{
      width: 45%;
      font-size: 15px;
      text-align: left;
      text-transform: capitalize;
      color: #8E6C6B;
    }

    
    .priceParagraphDark{
      width: 45%;
      font-size: 19px;
      color: #BECCE0;
      text-align: right;
    }


    .priceParagraphLight{
      width: 45%;
      font-size: 19px;
      color: #8E6C6B;
      text-align: right;
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
