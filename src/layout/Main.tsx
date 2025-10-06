import React from 'react';
import {styled} from "styled-components";
import {FlexWrapper} from "../components/Wrapper";
import {MainItem} from "./MainItem";

export type ItemType = {
    id: string
    sum: number
    incomeRate: boolean
    category: string
    note: string
    date: string
}

type PropsType = {
    itemList: ItemType[]
    removeCheck: (checkId: string) => void
    editOpen: () => void
    editCurrentCheck: (checkId: string, incomeRate: boolean, sum: number, cat: string, not: string) => void
}

export const Main = (props: PropsType) => {
    return (
        <StyledMain>
            <FlexWrapper direction={"column"}>
                <MainItem itemList={props.itemList}
                          removeCheck={props.removeCheck}
                          editCurrentCheck={props.editCurrentCheck}
                          editOpen={props.editOpen}
                />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
  width: 100%;
  padding-bottom: 70px;
`

