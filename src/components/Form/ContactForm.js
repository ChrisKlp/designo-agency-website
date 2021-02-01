import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import Field from './Field/Field'
import * as Yup from 'yup'
import { Formik } from 'formik'
import media from '../../global/mediaQueries'

const Wrapper = styled.form`
  display: grid;
  justify-items: center;
`

const SubmitButton = styled(Button)`
  margin-top: 2.7rem;

  @media (${media.md}) {
    margin-top: 1.1rem;
    justify-self: flex-end;
  }
`

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required(`Can't be empty`),
    email: Yup.string()
      .email('Please use a valid email address')
      .required(`Can't be empty`),
    phone: Yup.string()
      .min(5, 'Too Short!')
      .max(12, 'Too Long!')
      .required(`Can't be empty`),
    message: Yup.string().required(`Can't be empty`),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
          resetForm()
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Wrapper autoComplete="off" onSubmit={handleSubmit}>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.name && touched.name && errors.name}
          />
          <Field
            name="email"
            type="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email && touched.email && errors.email}
          />
          <Field
            name="phone"
            type="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.phone && touched.phone && errors.phone}
          />
          <Field
            as="textarea"
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.message && touched.message && errors.message}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </Wrapper>
      )}
    </Formik>
  )
}

export default ContactForm
