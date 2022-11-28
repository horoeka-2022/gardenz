import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addBug } from './bugsHelper'

const bugSchema = Yup.object({
  title: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  body: Yup.string().required('Required'),
})

export default function EventForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    onSubmit: (values) => {
      // console.log(values)
      addBug(values)
      formik.resetForm()
    },
    validationSchema: bugSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }

  return (
    <>
      <section>
        <h2 className="form-title">Report Bug</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              Name your Bug
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="form-box"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            <label htmlFor="body" className="label">
              Describe your bug
            </label>
            {formik.errors.body && formik.touched.body ? (
              <p className="inputError">{formik.errors.body}</p>
            ) : null}
            <textarea
              id="body"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </div>

          <button className="submit form-box" type="submit">
            Submit
          </button>

          <button className="submit form-box" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </section>
    </>
  )
}
