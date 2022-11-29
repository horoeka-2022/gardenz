import React from 'react'
import { Formik, Field, Form } from 'formik'

export default function DeliveryForm() {
  return (
    <section className="container mx-auto flex flex-col">
      <Formik
        initialValues={{
          numberAndStreet: '',
          suburb: '',
          city: '',
          postalCode: '',
          deliveryInstructions: '',
          day: '',
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          <section>
            <label htmlFor="delivery">
              Delivery
              <Field type="radio" name="delivery" value="delivery" />
            </label>
            <label htmlFor="pickUp">
              Pick up
              <Field type="radio" name="pickUp" value="pickUp" />
            </label>

            <label htmlFor="day">Select Delivery Day</label>
            <Field name="day" id="day" as="select">
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </Field>
          </section>
          <h1 className="">Delivery Address</h1>
          <section className="flex flex-col gap-4">
            <label htmlFor="numberAndStreet">Number and street</label>
            <Field
              id="numberAndStreet"
              name="numberAndStreet"
              className="border-2 border-lightGreen rounded-md"
            />

            <label htmlFor="suburb">Suburb</label>
            <Field
              id="suburb"
              name="suburb"
              className="border-2 border-lightGreen rounded-md"
            />

            <label htmlFor="city">City</label>
            <Field
              id="city"
              name="city"
              className="border-2 border-lightGreen rounded-md basis-3/4"
            />

            <label htmlFor="postalCode">Postal code</label>
            <Field
              id="postalCode"
              name="postalCode"
              type="number"
              className="border-2 border-lightGreen rounded-md basis-1/4"
            />

            <label htmlFor="deliveryInstructions">Delivery Instructions</label>
            <Field
              id="deliveryInstructions"
              name="deliveryInstructions"
              className="border-2 border-lightGreen rounded-md"
            />
            <button type="submit" className="bg-orange border-2 rounded-md">
              Checkout
            </button>
          </section>
        </Form>
      </Formik>
    </section>
  )
}
