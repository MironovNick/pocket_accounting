import Modal from 'react-modal'
import {ModalWindow} from "./ModalWindow";
import {checkType} from "../App";
import {ItemType} from "./Main";
import {AddCategoryModalWindow} from "./AddCategoryWindow";

type PropsType = {
    addCheck: (sum: number, incomeRate: boolean, cat: string, not: string, date: string) => void
    currentCheck: ItemType
    editCheck: (checkId: string, sum: number, cat: string, not: string) => void
    isOpen: boolean
    operationType: checkType
    onRequestClose: () => void
    modalType: boolean
    itemsIncome: string[]
    itemsRate: string[]
    addIncome: (name: string) => void
    addRate: (name: string) => void
    removeIncome: (name: string) => void
    removeRate: (name: string) => void
    currencyExchangeRate: number
}

export const ModalBody = (props: PropsType) => {

    let items: string[]

    if(props.operationType === 'rate')
        items = props.itemsRate
    else if(props.operationType === 'income')
        items = props.itemsIncome
    else if(props.currentCheck.incomeRate)
        items = props.itemsIncome
    else
        items = props.itemsRate

    if(props.modalType)

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}
               style={{
                   overlay: {
                       position: 'fixed',
                       top: 0,
                       left: 0,
                       right: 0,
                       bottom: 0,
                       backgroundColor: 'rgba(255, 255, 255, 0.75)',
                   },
                   content: {
                       position: 'absolute',
                       top: '40px',
                       left: '40px',
                       right: '40px',
                       bottom: '40px',
                       border: 'none',
                       background: "transparent",
                       overflow: 'auto',
                       WebkitOverflowScrolling: 'touch',
                       borderRadius: '4px',
                       outline: 'none',
                       padding: '20px'
                   }
               }}>
            <ModalWindow closeModal={props.onRequestClose}
                         menuItems={items}
                         addCheck={props.addCheck}
                         currentCheck={props.currentCheck}
                         editCheck={props.editCheck}
                         operationType={props.operationType}
                         currencyExchangeRate={props.currencyExchangeRate}
            />

        </Modal>
    )

    else

        return (
            <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}
                   style={{
                       overlay: {
                           position: 'fixed',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           backgroundColor: 'rgba(255, 255, 255, 0.75)',
                       },
                       content: {
                           position: 'absolute',
                           top: '40px',
                           left: '40px',
                           right: '40px',
                           bottom: '40px',
                           border: 'none',
                           background: "transparent",
                           overflow: 'auto',
                           WebkitOverflowScrolling: 'touch',
                           borderRadius: '4px',
                           outline: 'none',
                           padding: '20px'
                       }
                   }}>
                <AddCategoryModalWindow closeModal={props.onRequestClose}
                                        addIncome={props.addIncome}
                                        addRate={props.addRate}
                                        itemsIncome={props.itemsIncome}
                                        itemsRate={props.itemsRate}
                                        removeIncome={props.removeIncome}
                                        removeRate={props.removeRate}
                />

            </Modal>
        )
}



