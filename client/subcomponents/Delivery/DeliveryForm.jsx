import React from 'react'
import { Formik, Field, Form } from 'formik'

export default function DeliveryForm() {
  return (
    <>
      <Formik
        initialValues={{
          numberAndStreet: '',
          suburb: '',
          city: '',
          postalCode: '',
          deliveryInstructions: '',
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          <label htmlFor="numberAndStreet">Number and street</label>
          <Field id="numberAndStreet" name="numberAndStreet" />

          <label htmlFor="suburb">Suburb</label>
          <Field id="suburb" name="suburb" />

          <label htmlFor="city">City</label>
          <Field id="city" name="city" />

          <label htmlFor="postalCode">Postal code</label>
          <Field id="postalCode" name="postalCode" type="number" />

          <label htmlFor="deliveryInstructions">Delivery Instructions</label>
          <Field id="deliveryInstructions" name="deliveryInstructions" />
        </Form>
      </Formik>
    </>
  )
}
