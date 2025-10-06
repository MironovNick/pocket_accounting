import Modal from 'react-modal'
import {ModalWindow} from "./ModalWindow";
import {checkType} from "../App";
import {ItemType} from "./Main";

const itemsIncome = ["salary", "freelance", "gift", "another source of income"];
const itemsRate = ["food", "clothes", "utility payment", "health care", "education", "vacation"]

type PropsType = {
    addCheck: (sum: number, incomeRate: boolean, cat: string, not: string, date: string) => void
    currentCheck: ItemType
    editCheck: (checkId: string, sum: number, cat: string, not: string) => void
    isOpen: boolean
    operationType: checkType
    onRequestClose: () => void
}

export const ModalBody = (props: PropsType) => {

    let items: string[] /* = props.operationType == "rate" ? itemsRate : itemsIncome*/

    /*if(props.operationType === 'rate')
        items = itemsRate
    else if(props.operationType === 'income')
        items = itemsIncome
    else if(itemsRate.indexOf(props.currentCheck.category) != -1)
        items = itemsRate
    else
        items = itemsIncome*/

    if(props.operationType === 'rate')
        items = itemsRate
    else if(props.operationType === 'income')
        items = itemsIncome
    else if(props.currentCheck.incomeRate)
        items = itemsIncome
    else
        items = itemsRate

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
            <ModalWindow closeModal={props.onRequestClose}
                         menuItems={items}
                         addCheck={props.addCheck}
                         currentCheck={props.currentCheck}
                         editCheck={props.editCheck}
                         operationType={props.operationType}
            />
        </Modal>
    )
}

