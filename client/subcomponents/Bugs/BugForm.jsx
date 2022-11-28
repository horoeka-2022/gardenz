import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addBug } from './bugsHelper'
import { useNavigate } from 'react-router-dom'

const bugSchema = Yup.object({
  title: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  body: Yup.string().required('Required'),
})

export default function BugForm() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    onSubmit: async (values) => {
      await addBug(values)
      navigate(-1)
    },
    validationSchema: bugSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <>
      <section className="mx-auto max-w-md mt-9 px-8">
        <h2 className="form-title text-darkBlue text-[24px] font-serif py-3">
          Report Bug
        </h2>
        <form
          className="form-content text-[16px] text-black"
          onSubmit={formik.handleSubmit}
        >
          <div className="field">
            <label htmlFor="title" className="label">
              Summary of the issue
            </label>
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

            <label htmlFor="body" className="label">
              Detailed steps to reproduce the issue
            </label>
            {formik.errors.body && formik.touched.body ? (
              <p className="inputError">{formik.errors.body}</p>
            ) : null}
            <textarea
              className="description-box border border-[1.5px] border-blue rounded-[4px] p-2 pb-[7em] w-full mb-3"
              id="body"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </div>

          <button
            className="submit form-box h-7 w-48 bg-orange text-white font-bold rounded-[4px]"
            type="submit"
          >
            Submit
          </button>

          <button
            className="submit form-box h-7 w-48 font-bold rounded-[4px]"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </section>
    </>
  )
}
