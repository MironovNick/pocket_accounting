import React, {useState} from 'react';
import './App.css';
import {Header} from "./layout/Header";
import {Main, ItemType} from "./layout/Main";
import {AddBar} from "./layout/Add";
import {ModalBody} from "./layout/Modal";
import {v1} from "uuid";
import {DonutCharts} from "./layout/DonutCharts";


export type checkType = "income" | "rate" | "edit";
export type incomeRateFilterType = "income" | "rate" | "all";

function App() {

    const [operationType, setOperationType] = useState<checkType>('income');

    const rateClicked = () => {
        setOperationType("rate");
        openModal()
    }
    const incomeClicked = () => {
        setOperationType("income");
        openModal()
    }
    const editClicked = () => {
        setOperationType("edit");
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
    const text = date.toISOString().substring(0, 10);

    const [firstDate, setFirstDate] = useState<string>(text)
    const [secondDate, setSecondDate] = useState<string>(text)

    /*incomeRate: true*/

    const [itemList, setList] = useState<ItemType[]>([
        {id: v1(), incomeRate: true, sum: 350, category: "salary", note: "adcasdc", date: "2025-06-01"},
        {id: v1(), incomeRate: false, sum: 2100, category: "health care", note: "sdcsdv", date: "2024-11-07"},
        {id: v1(), incomeRate: true, sum: 45, category: "freelance", note: "csdvsdvvsdv", date: "2025-02-28"},
    ]);

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
        setList(newItemList)
    }

    const removeCheck = (checkId: string) => {
        const newItemList = itemList.filter(t => t.id !== checkId)
        setList(newItemList)
    }

    const addCheck = (sum: number, incomeRate: boolean, cat: string, not: string, date: string) => {
        const newCheck = {id: v1(), incomeRate: incomeRate, sum: sum, category: cat, note: not, date: date}
        setList([newCheck, ...itemList])
    }

    const incomeRateFilterChange = (filter: incomeRateFilterType) => {
        setIncomeRateFilter(filter)
    }

    const filteredItemList = itemList.filter(t =>
        (incomeRateFilter === 'all'
            || incomeRateFilter === 'income' && t.incomeRate
            || incomeRateFilter === 'rate' && !t.incomeRate) && t.date >= firstDate && t.date <= secondDate)

    const incomeSum = itemList.reduce((sum, current) => current.incomeRate ? sum + current.sum : sum
        , 0)

    const rateSum = itemList.reduce((sum, current) => !current.incomeRate ? sum + current.sum : sum
        , 0)

    const changeFirstDate = (newDate: string) => {
        setFirstDate(newDate)
    }
    const changeSecondDate = (newDate: string) => {
        setSecondDate(newDate)
    }


    return (
        <div className="App">
            <div className="LeftWindow">
                <Header incomeRateFilterChange={incomeRateFilterChange}
                        incomeSum={incomeSum}
                        rateSum={rateSum}
                        changeFirstDate={changeFirstDate}
                        changeSecondDate={changeSecondDate}
                        firstDate={firstDate}
                        secondDate={secondDate}
                />
                <Main itemList={filteredItemList}
                      removeCheck={removeCheck}
                      editOpen={editClicked}
                      editCurrentCheck={editCurrentCheck}
                />
                <AddBar rateOpen={rateClicked} incomeOpen={incomeClicked}/>
                <ModalBody isOpen={modalIsOpen}
                           onRequestClose={closeModal}
                           operationType={operationType}
                           addCheck={addCheck}
                           currentCheck={currentCheck}
                           editCheck={editCheck}
                />
            </div>
            <div className="RightWindow">
                <DonutCharts/>
            </div>
        </div>
    );
}

export default App;
