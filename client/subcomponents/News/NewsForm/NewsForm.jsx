import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Conditional from '../../Conditional'

const newsSchema = Yup.object({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
})

export default function NewsForm(props) {
  const news = props.formData
  const { title, content } = news

  const formik = useFormik({
    initialValues: {
      title,
      content,
    },
    onSubmit: (values) => {
      props.submitNews(values)
    },
    validationSchema: newsSchema,
  })

  return (
    <>
      <section className="py-12 ">
        <h2 className="font-serif	text-xl form-title text-center">
          {props.action}
        </h2>
        <div className="flex justify-center">
          <form className="form-content" onSubmit={formik.handleSubmit}>
            <div className="py-1 field">
              <div className="py-8">
                <label htmlFor="title" className="label border-3 NEWS TITLE">
                  News Title
                </label>
                <div className="field">
                  <Conditional
                    condition={formik.errors.title && formik.touched.title}
                  >
                    <p className="inputError text-red text-xs">
                      {formik.errors.title}
                    </p>
                  </Conditional>
                </div>
                <div className="py-1 field">
                  <input
                    className="form-box border-2"
                    id="title"
                    name="title"
                    type="text"
                    placeholder="news title"
                    utton-group
                    items-center
                    block
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </div>
              </div>

              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <Conditional
              condition={formik.errors.content && formik.touched.content}
            >
              <p className="inputError text-red text-xs">
                {formik.errors.content}
              </p>
            </Conditional>

            <textarea
              className="content-box border-2 h-32"
              id="content"
              name="content"
              placeholder="news content"
              onChange={formik.handleChange}
              value={formik.values.content}
            />

            <button
              className="block ml-auto mr-auto submit form-box w-32 mt-5 p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
