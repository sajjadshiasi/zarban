import { ComponentPropsWithoutRef, FC } from "react";
import { TaskResponse } from "../../types";
import styled from "styled-components";
import { BACKGROUND_COLOR, TEXT_COLOR } from "../../style/variables";

interface ListProps {
    items: Array<TaskResponse>;
}

const UnorderedList = styled.ul`
    padding: 16px;
    text-align: left;
    border-radius: 16px;
    size: 14px;
    list-style: none;
`
const ListItem = styled.li `
     background-color: ${BACKGROUND_COLOR};
     color: ${TEXT_COLOR};
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     gap: 14px;
     border-radius: 4px;
     padding: 16px;
     margin: 16px 0;
     font-weight: 500;
`
const ListTittles = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
const List:FC<ComponentPropsWithoutRef<'ul'> & ListProps> = ({items}) => (
    <UnorderedList>
        {items.map((item) => (
            <ListItem key={item.id}>
                <ListTittles>
                    <span>title</span>
                    <span>status</span>
                </ListTittles>
                <ListTittles>
                    <span>{item.title}</span>
                    <span>{item.completed ? 'Complete' : 'Pending'}</span>
                </ListTittles>
            </ListItem>
        ))}
    </UnorderedList>
);
export default List;