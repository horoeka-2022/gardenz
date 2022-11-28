import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const eventSchema = Yup.object({
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
})

export default function EventForm() {
  const initialState = {
    title: '',
    date: '',
    volunteersNeeded: 0,
    description: '',
  }
  const event = initialState
  const { title, body } = event

  const formik = useFormik({
    initialValues: {
      title,
      body,
    },
    onSubmit: (values) => {
      props.submitEvent(values)
    },
    validationSchema: eventSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }

  return (
    <>
      <section>
        <h2 className="form-title">{props.action}</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              Event Title
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="form-box"
              id="title"
              name="title"
              type="text"
              placeholder="event title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            <label htmlFor="date" className="label">
              Date
            </label>
            {formik.errors.date && formik.touched.date ? (
              <p className="inputError">{formik.errors.date}</p>
            ) : null}
            <input
              className="form-box"
              id="date"
              name="date"
              type="date"
              role="date"
              placeholder="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />

            <label htmlFor="volunteersNeeded" className="label">
              Volunteers Needed
            </label>
            {formik.errors.volunteersNeeded &&
            formik.touched.volunteersNeeded ? (
              <p className="inputError">{formik.errors.volunteersNeeded}</p>
            ) : null}
            <input
              className="form-box"
              id="volunteersNeeded"
              name="volunteersNeeded"
              type="number"
              placeholder="volunteers needed"
              min="0"
              onChange={formik.handleChange}
              value={formik.values.volunteersNeeded}
            />

            <label htmlFor="description" className="label">
              Description
            </label>
            {formik.errors.description && formik.touched.description ? (
              <p className="inputError">{formik.errors.description}</p>
            ) : null}
            <textarea
              className="description-box"
              id="description"
              name="description"
              placeholder="event description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>

          <div className="button-group">
            {props.action === 'Update Event' ? (
              <button className="submit form-box" onClick={handleCancel}>
                Cancel Event
              </button>
            ) : null}

            <button className="submit form-box" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
