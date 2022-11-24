import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const eventSchema = Yup.object({
  title: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  volunteersNeeded: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
})

// the date format which browsers understand
const browserDateFormat = 'yyyy-MM-DD'
const nzDateFormat = 'DD/MM/yyyy'

export default function EventForm(props) {
  const event = props.formData
  const { title, date, volunteersNeeded, description } = event
  const formik = useFormik({
    initialValues: {
      title,
      date: moment(date, nzDateFormat).format(browserDateFormat),
      volunteersNeeded,
      description,
    },
    onSubmit: (values) => {
      props.submitEvent({
        ...values,
        date: moment(values.date).format(nzDateFormat),
      })
    },
    validationSchema: eventSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }

  return (
    <>
      <section className="container md:flex mx-auto mt-5 content-center">
        <h2 className="form-title text-darkBlue text-[24px] font-serif">
          {props.action}
        </h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              Event Title
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="form-box border"
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
              className="form-box border"
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
              className="form-box border"
              id="volunteersNeeded"
              name="volunteersNeeded"
              type="number"
              placeholder="volunteers needed"
              min="0"
              onChange={formik.handleChange}
              value={formik.values.volunteersNeeded}
            />

            <div>
              <label htmlFor="description" className="label">
                Description
              </label>
              {formik.errors.description && formik.touched.description ? (
                <p className="inputError">{formik.errors.description}</p>
              ) : null}
              <textarea
                className="description-box border"
                id="description"
                name="description"
                placeholder="event description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
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
