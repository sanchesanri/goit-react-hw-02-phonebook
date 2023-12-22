export const ContactsFilter = ({ dataContacts, handlerFilterChange }) => {

    return (
        <>
            <h3>Find contacts by name</h3>
            <input
                type="text" name="filter"
                placeholder="Anna..."
                value={dataContacts.filter}
                onChange={handlerFilterChange} />
        </>
    )
}