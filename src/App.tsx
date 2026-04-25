import React, {useState} from 'react';
import './App.css';
import {Header} from "./layout/Header";
import {Main, ItemType} from "./layout/Main";
import {AddBar} from "./layout/Add";
import {ModalBody} from "./layout/Modal";
import {v1} from "uuid";
import {DonutCharts} from "./layout/DonutCharts";

export type checkType = "income" | "rate" | "edit" | "category" | "exchange";
export type incomeRateFilterType = "income" | "rate" | "all";

const itemsIncome = ["salary", "freelance", "gift", "another income source"];
const itemsRate = ["food", "clothes", "utility payment", "health care", "education", "vacation"]

const currencyExchangeRate = [1, 2.8, 0.85, 0.75]
const currencyName = ["USD", "BYN", "EUR", "GBP"]
const currencySignArr = ["$", "Б", "€", "£"]

function App() {

    const [currentTheme, setTheme] = useState<boolean>(true)

    const changeBodyBackground = () => {
        if (currentTheme)
            document.body.style.background = "linear-gradient(105deg, rgba(214, 91, 90) 0%, rgba(237, 149, 93) 10%, rgba(228, 221, 221) 100%) fixed";
        else
            document.body.style.background = "linear-gradient(275deg,rgba(2, 0, 36, 1) 0%, rgba(18, 33, 54, 1) 35%, rgba(3, 3, 31, 1) 100%) fixed";
    }

    const changeTheme = () => {
        setTheme(!currentTheme)
        changeBodyBackground()
    }

    const [currencyIndex, setCurrency] = useState<number>(0);

    const changeCurrency = (index: number) => {
        setCurrency(index)
    }

    const [income, setIncome] = useState<string[]>(localStorage.getItem("income") ? JSON.parse((localStorage.getItem("income") || "")) : itemsIncome);
    const [rate, setRate] = useState<string[]>(localStorage.getItem("rate") ? JSON.parse((localStorage.getItem("rate") || "")) : itemsRate);

    const addIncome = (name: string) => {
        localStorage.setItem("income", JSON.stringify([name, ...income]))
        setIncome([name, ...income])
    }
    const addRate = (name: string) => {
        localStorage.setItem("rate", JSON.stringify([name, ...rate]))
        setRate([name, ...rate])
    }

    const removeIncome = (name: string) => {
        const newIncome = income.filter(t => t !== name)
        localStorage.setItem("income", JSON.stringify(newIncome))
        setIncome(newIncome)
    }

    const removeRate = (name: string) => {
        const newRate = rate.filter(t => t !== name)
        localStorage.setItem("rate", JSON.stringify(newRate))
        setRate(newRate)
    }

    const [operationType, setOperationType] = useState<checkType>('income');
    const [modalType, setModalType] = useState<boolean>(true);

    const rateClicked = () => {
        setOperationType("rate");
        setModalType(true)
        openModal()
    }
    const incomeClicked = () => {
        setOperationType("income");
        setModalType(true)
        openModal()
    }
    const editClicked = () => {
        setOperationType("edit");
        setModalType(true)
        openModal()
    }
    const addCategoryClicked = () => {
        setOperationType("category");
        setModalType(false)
        openModal()
    }
    const changeExchangeRateClicked = () => {
        setOperationType("exchange");
        setModalType(false)
        openModal()
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }

    const date = new Date()

    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 2);
    const formattedFirstDayMonth = firstDayMonth.toISOString().substring(0, 10);

    const firstDayPrevMonth = new Date(date.setDate(0));
    const formattedFirstDayPrevMonth = firstDayPrevMonth.toISOString().substring(0, 10);
    const lastDayPrevMonth = new Date(date.setMonth(date.getMonth() - 1));
    const formattedLastDayPrevMonth = lastDayPrevMonth.toISOString().substring(0, 10);

    const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 2);
    const formattedFirstDayOfCurrentYear = firstDayOfCurrentYear.toISOString().substring(0, 10);

    const presentDay = new Date();
    const formattedPresentDay = presentDay.toISOString().substring(0, 10);

    const today = new Date();
    const lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 2);
    const formattedLastYear = lastYear.toISOString().substring(0, 10);

    const [firstDate, setFirstDate] = useState<string>(formattedLastYear)
    const [secondDate, setSecondDate] = useState<string>(formattedPresentDay)
    const [isMobile, setIsMobile] = useState<boolean>(window.screen.width <= 992)

    const windowSizeHandler = () => {
        setIsMobile(window.screen.width <= 992)
    };

    window.addEventListener('resize', windowSizeHandler)

    const [displayLeftWindowMob, setDisplayLeftWindowMob] = useState<boolean>(true)

    const openLeftWindowMob = () => {
        setDisplayLeftWindowMob(true)
    }
    const openRightWindowMob = () => {
        setDisplayLeftWindowMob(false)
    }

    /*incomeRate: true*/
    const [itemList, setList] = useState<ItemType[]>(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items') || '') :
        [
            {
                id: v1(),
                incomeRate: true,
                sum: 650,
                category: "another income source",
                note: "adcasdc",
                date: "2025-11-11"
            },
            {id: v1(), incomeRate: true, sum: 350, category: "salary", note: "adcasdc", date: "2025-06-01"},
            {
                id: v1(),
                incomeRate: false,
                sum: 1200,
                category: "utility payment",
                note: "qcqascasas",
                date: "2025-05-01"
            },
            {id: v1(), incomeRate: true, sum: 200, category: "salary", note: "nckdmksllxs", date: "2025-05-01"},
            {id: v1(), incomeRate: false, sum: 500, category: "food", note: "sdcsdv", date: "2025-03-17"},
            {id: v1(), incomeRate: true, sum: 450, category: "freelance", note: "csdvsdvvsdv", date: "2025-02-28"},
            {id: v1(), incomeRate: false, sum: 2100, category: "health care", note: "sdcsdv", date: "2024-11-07"},
            {id: v1(), incomeRate: false, sum: 2300, category: "clothes", note: "casc sdqsf", date: "2024-05-10"},
        ]
    );

    const [currentCheck, setCurrentCheck] = useState<ItemType>(
        {id: "0", incomeRate: true, sum: 0, category: "", note: "", date: ""}
    )

    const [incomeRateFilter, setIncomeRateFilter] = useState<incomeRateFilterType>('all')

    const editCurrentCheck = (checkId: string, incomeRate: boolean, sum: number, cat: string, not: string) => {
        const newCheck = {id: checkId, incomeRate: incomeRate, sum: sum, category: cat, note: not, date: ''}
        setCurrentCheck(newCheck)
    }

    const editCheck = (checkId: string, sum: number, cat: string, not: string) => {
        const newItemList = itemList.map(t =>
            t.id == checkId ? {...t, sum: sum, category: cat, note: not} : t
        )
        localStorage.setItem('items', JSON.stringify(newItemList))
        setList(newItemList)
    }

    const removeCheck = (checkId: string) => {
        const newItemList = itemList.filter(t => t.id !== checkId)
        localStorage.setItem('items', JSON.stringify(newItemList))
        setList(newItemList)
    }

    const addCheck = (sum: number, incomeRate: boolean, cat: string, not: string, date: string) => {
        const newCheck = {id: v1(), incomeRate: incomeRate, sum: sum, category: cat, note: not, date: date}
        localStorage.setItem('items', JSON.stringify([newCheck, ...itemList]))
        setList([newCheck, ...itemList])
    }

    const incomeRateFilterChange = (filter: incomeRateFilterType) => {
        setIncomeRateFilter(filter)
    }

    const filteredItemList = itemList.filter(t =>
        (incomeRateFilter === 'all'
            || incomeRateFilter === 'income' && t.incomeRate
            || incomeRateFilter === 'rate' && !t.incomeRate) && t.date >= firstDate && t.date <= secondDate)

    const incomeSum = filteredItemList.reduce((sum, current) => current.incomeRate ? sum + current.sum : sum
        , 0)

    const rateSum = filteredItemList.reduce((sum, current) => !current.incomeRate ? sum + current.sum : sum
        , 0)

    const balance = incomeSum - rateSum

    const changeFirstDate = (newDate: string) => {
        setFirstDate(newDate)
    }
    const changeSecondDate = (newDate: string) => {
        setSecondDate(newDate)
    }

    const setThisMonth = () => {
        setFirstDate(formattedFirstDayMonth)
        setSecondDate(formattedPresentDay)
    }

    const setLastMonth = () => {
        setFirstDate(formattedLastDayPrevMonth)
        setSecondDate(formattedFirstDayPrevMonth)
    }

    const setThisYear = () => {
        setFirstDate(formattedFirstDayOfCurrentYear)
        setSecondDate(formattedPresentDay)
    }

    const setAllTime = () => {
        setFirstDate(formattedLastYear)
        setSecondDate(formattedPresentDay)
    }

    return (
        <div className="App">
            <div
                className={currentTheme ? !isMobile ? "LeftWindow" : displayLeftWindowMob ? "LeftWindow" : "LeftWindowInactive" :
                    !isMobile ? "LeftWindowLight" : displayLeftWindowMob ? "LeftWindowLight" : "LeftWindowLightInactive"}>
                <Header incomeRateFilterChange={incomeRateFilterChange}
                        incomeSum={incomeSum * currencyExchangeRate[currencyIndex]}
                        rateSum={rateSum * currencyExchangeRate[currencyIndex]}
                        balance={balance * currencyExchangeRate[currencyIndex]}
                        changeFirstDate={changeFirstDate}
                        changeSecondDate={changeSecondDate}
                        firstDate={firstDate}
                        secondDate={secondDate}
                        setThisMonth={setThisMonth}
                        setLastMonth={setLastMonth}
                        setThisYear={setThisYear}
                        setAllTime={setAllTime}
                        openRightWindowMob={openRightWindowMob}
                        addCategory={addCategoryClicked}
                        onRequestClose={closeModal}
                        changeCurrency={changeCurrency}
                        changeTheme={changeTheme}
                        currentTheme={currentTheme}
                        currencySign={currencySignArr[currencyIndex]}
                        exchangeRate={changeExchangeRateClicked}
                />
                <Main itemList={filteredItemList}
                      removeCheck={removeCheck}
                      editOpen={editClicked}
                      editCurrentCheck={editCurrentCheck}
                      currencyExchangeRate={currencyExchangeRate[currencyIndex]}
                      currentTheme={currentTheme}
                      currencySign={currencySignArr[currencyIndex]}
                />
                <AddBar rateOpen={rateClicked}
                        incomeOpen={incomeClicked}
                        currentTheme={currentTheme}
                />
                <ModalBody isOpen={modalIsOpen}
                           onRequestClose={closeModal}
                           operationType={operationType}
                           addCheck={addCheck}
                           currentCheck={currentCheck}
                           editCheck={editCheck}
                           modalType={modalType}
                           itemsIncome={income}
                           itemsRate={rate}
                           addIncome={addIncome}
                           addRate={addRate}
                           removeIncome={removeIncome}
                           removeRate={removeRate}
                           currencyExchangeRate={currencyExchangeRate[currencyIndex]}
                />

            </div>
            <div
                className={currentTheme ? !isMobile ? "RightWindow" : displayLeftWindowMob ? "RightWindowInactive" : "RightWindow" :
                    !isMobile ? "RightWindowLight" : !displayLeftWindowMob ? "RightWindowLight" : "RightWindowLightInactive"}>
                <DonutCharts ItemList={filteredItemList}
                             incomeRate={incomeRateFilter}
                             incomeSum={incomeSum}
                             rateSum={rateSum}
                             openLeftWindowMob={openLeftWindowMob}
                             changeTheme={changeTheme}
                             currentTheme={currentTheme}
                />
            </div>
        </div>
    );
}

export default App;
