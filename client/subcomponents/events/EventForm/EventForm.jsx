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
      <section className="mx-auto max-w-md mt-9 px-8">
        <div className="">
          <h2 className="form-title text-darkBlue text-[24px] font-serif py-3">
            {props.action}
          </h2>

          <form
            className="form-content text-[16px] text-black"
            onSubmit={formik.handleSubmit}
          >
            <div className="field">
              <label htmlFor="title" className="label">
                Event Title
              </label>
              <div>
                {formik.errors.title && formik.touched.title ? (
                  <p className="inputError">{formik.errors.title}</p>
                ) : null}
                <input
                  className="form-box border border-[1.5px] border-blue rounded-[4px] p-2 w-full mb-5"
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>
              <label htmlFor="date" className="label">
                Date
              </label>
              <div>
                {formik.errors.date && formik.touched.date ? (
                  <p className="inputError">{formik.errors.date}</p>
                ) : null}
                <input
                  className="form-box border border-[1.5px] border-blue rounded-[4px] p-2 w-full mb-5"
                  id="date"
                  name="date"
                  type="date"
                  role="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
              </div>
              <label htmlFor="volunteersNeeded" className="label">
                Volunteers Needed
              </label>
              <div>
                {formik.errors.volunteersNeeded &&
                formik.touched.volunteersNeeded ? (
                  <p className="inputError">{formik.errors.volunteersNeeded}</p>
                ) : null}
                <input
                  className="form-box border border-[1.5px] border-blue rounded-[4px] p-2 w-full mb-5"
                  id="volunteersNeeded"
                  name="volunteersNeeded"
                  type="number"
                  min="0"
                  onChange={formik.handleChange}
                  value={formik.values.volunteersNeeded}
                />
              </div>
              <label htmlFor="description" className="label text-black">
                Description
              </label>
              <div>
                {formik.errors.description && formik.touched.description ? (
                  <p className="inputError">{formik.errors.description}</p>
                ) : null}
                <textarea
                  className="description-box border border-[1.5px] border-blue rounded-[4px] p-2 pb-[7em] w-full mb-3"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>
            </div>

            <div className="button-group">
              <div>
                <button
                  className="submit form-box h-7 w-48 bg-orange text-white font-bold rounded-[4px]"
                  type="submit"
                >
                  Submit
                </button>

                {props.action === 'Update Event' ? (
                  <button
                    className="submit form-box h-7 w-48 font-bold rounded-[4px]"
                    onClick={handleCancel}
                  >
                    Cancel Event
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
