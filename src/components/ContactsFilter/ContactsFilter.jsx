import React, { Component } from "react";

export class ContactsFilter extends Component {


    handlerChangeFilter = (e) => {
        this.props.handlerFilterChange(e.target.value)
    }

    render() {

        return (
            <>
                <h3>Find contacts by name</h3>
                <input
                    type="text" name="filter"
                    placeholder="Anna..."
                    value={this.props.dataContacts.filter}
                    onChange={this.handlerChangeFilter} />
            </>
        )
    }
}