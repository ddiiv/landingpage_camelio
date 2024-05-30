import React from 'react';
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../css/ContactUs.css"

const ContactUs = () => {

    const SignupSchema = Yup.object({
        Name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        Email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        PhoneNumber: Yup.number()
            .positive("The phone number cant be negative")
            .required("Required"),
        Message: Yup.string()
            .required("Required")
            .max(250, "Must be 250 characters or less")
    })
        ;
    return (
        <div className='pageContactUs-container'>
            <h1 className='contactus_title'>Contact Us</h1>
            <Formik
                initialValues={{ Name: "", Email: null, PhoneNumber: null, Message: "" }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className='form-contact-grid'>
                        <div className='form-contact-grid-item left'>
                            <div className="row-register-form">
                                <div className="andres-form-control__itemcontainer register">
                                    <span className="andres-form-control__label">Full Name</span>
                                    <div className="andres-form-control__control register">
                                        <Field
                                            type="text"
                                            placeholder="Enter your full name"
                                            name="Name"
                                            autoCapitalize="true"
                                            className="andres-form-control--textfield andes-form-control__field register"
                                        >
                                        </Field>
                                    </div>
                                    <div className="andres-form-control__bottom">
                                        <span className="andres-form-control__error-icon">
                                        </span>
                                        <span className="andres-form-control__message" id="user_id-message">

                                            <ErrorMessage name="Name" className="input-error" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row-register-form">
                                <div className="andres-form-control__itemcontainer register">
                                    <span className="andres-form-control__label">Phone Number</span>
                                    <div className="andres-form-control__control register">
                                        <Field
                                            type="number"
                                            placeholder="Introduce your phone number"
                                            name="PhoneNumber"
                                            autoCapitalize="true"
                                            className="andres-form-control--textfield andes-form-control__field register"
                                        >

                                        </Field>
                                    </div>
                                    <div className="andres-form-control__bottom">
                                        <span className="andres-form-control__error-icon">
                                        </span>
                                        <span className="andres-form-control__message" id="user_id-message">

                                            <ErrorMessage name="PhoneNumber" className="input-error" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row-register-form">
                                <div className="andres-form-control__itemcontainer register">
                                    <span className="andres-form-control__label">Email</span>
                                    <div className="andres-form-control__control register">
                                        <Field
                                            type="email"
                                            placeholder="Introduce your email"
                                            name="Email"
                                            autoCapitalize="true"
                                            className="andres-form-control--textfield andes-form-control__field register"
                                        >

                                        </Field>
                                    </div>
                                    <div className="andres-form-control__bottom">
                                        <span className="andres-form-control__error-icon">
                                        </span>
                                        <span className="andres-form-control__message" id="user_id-message">

                                            <ErrorMessage name="Email" className="input-error" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-contact-grid-item right'>
                            <div className="row-register-form">
                                <div className="andres-form-control__itemcontainer register">
                                    <span className="andres-form-control__label">Message</span>
                                    <div className="andres-form-control__control register">
                                        <Field
                                            type="text"
                                            placeholder="Describe your query. (Max 250 letters)"
                                            name="Message"
                                            autoCapitalize="true"
                                            className="andres-form-control--textfield andes-form-control__field right"
                                        >

                                        </Field>
                                    </div>
                                    <div className="andres-form-control__bottom">
                                        <span className="andres-form-control__error-icon">
                                        </span>
                                        <span className="andres-form-control__message" id="user_id-message">

                                            <ErrorMessage name="Message" className="input-error" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-form__actions register">
                        <button type="submit" className="andres-button register">
                            <span className="andres-button__content register">
                                Submit!
                            </span>
                        </button>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

export default ContactUs;
