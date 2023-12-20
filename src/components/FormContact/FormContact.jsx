import React, { Component } from "react"
import { nanoid } from 'nanoid'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ButtonForm, Container, FormContactStyle, InputForm } from "./FormContact.styled";


export class FormContact extends Component {

    state = {
        name: '',
    }

    initialValues = {
        name: '',
        number: '',
    }

    schema = Yup.object().shape({
        name: Yup.string(),
        number: Yup.number().min(3, 'Too Short!')

    })

    // handlerSubmit = (e) => {
    //     e.preventDefault()

    //     this.props.addContact({
    //         id: nanoid(),
    //         name: e.target.name.value,
    //         number: e.target.number.value,
    //     })
    // }

    handlerSubmitFormic = ({ name, number }, actions) => {
        this.props.addContact({
            id: nanoid(),
            name,
            number,
        })
        console.log(actions);
        actions.resetForm()
    }



    render() {
        return (
            <Container>
                <h2>Phonebook</h2>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.handlerSubmitFormic}
                    validationSchema={this.schema}>
                    <FormContactStyle>
                        {/* <Form onSubmit={this.handlerSubmit}> */}
                        <label >Name
                            <InputForm type="text" name="name" required />
                            <ErrorMessage name="name" />
                            {/* <InputForm type="text" name="name" required /> */}
                        </label>
                        <label>Number
                            <InputForm type="tel" name="number" required />
                            <ErrorMessage name="number" />
                            {/* <InputForm type="tel" name="number" required /> */}
                        </label>
                        <ButtonForm type="submit" onClick={this.handlerClick}>Add contact</ButtonForm>
                    </FormContactStyle>
                </Formik>
            </Container>
        )
    }
}