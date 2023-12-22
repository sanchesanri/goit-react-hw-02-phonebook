import { ButtonList, Container, Item, Text } from "./ContactsList.styled"

export const ContactsList = ({ options, handleDeleteContact }) => {

    return (
        <>
            <Container>
                <ul>
                    {options.map(({ id, name, number }) => {
                        return <Item key={id}>
                            <Text>- {name}: {number}</Text>
                            <ButtonList type="button" onClick={() => handleDeleteContact(id)}>Delete</ButtonList>
                        </Item>
                    })}
                </ul>
            </Container>
        </>
    )
}
