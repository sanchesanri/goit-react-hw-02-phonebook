import React, { Component } from "react"
import { ButtonList, Container, Item, Text } from "./ContactsList.styled"

export class ContactsList extends Component {

    state = {
        number: '',
    }

    render() {

        return (
            <>
                <Container>
                    <ul>
                        {this.props.options.map(({ id, name, number }) => {
                            return <Item key={id}>
                                <Text>- {name}: {number}</Text>
                                <ButtonList type="button" onClick={() => this.props.handleDeleteContact(id)}>Delete</ButtonList>
                            </Item>
                        })}
                    </ul>
                </Container>
            </>
        )
    }
}