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
      <section className="py-12 flex-auto text-center items-center justify-center">
        <h2 className="form-title items-center">{props.action}</h2>
        <form
          className="form-content flex-auto text-center items-center justify-center flex-col"
          onSubmit={formik.handleSubmit}
        >
          <div className="field items-center justify-center flex-col">
            <div>
              {' '}
              <label htmlFor="title" className="label">
                News Title
              </label>
              <Conditional
                condition={formik.errors.title && formik.touched.title}
              >
                <p className="inputError">{formik.errors.title}</p>
              </Conditional>
              <input
                className="form-box"
                id="title"
                name="title"
                type="text"
                placeholder="news title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div className="items-center justify-center flex-col">
              <label htmlFor="content" className="label">
                Content
              </label>
              <Conditional
                condition={formik.errors.content && formik.touched.content}
              >
                <p className="inputError">{formik.errors.content}</p>
              </Conditional>

              <textarea
                className="content-box"
                id="content"
                name="content"
                placeholder="news content"
                onChange={formik.handleChange}
                value={formik.values.content}
              />
            </div>
          </div>

          <div className="button-group items-center justify-center flex-col">
            <button className="submit form-box" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

//////

// // garden logo image
// <section class="container lg:flex items-center justify-between mx-auto">
// <img src="/images/gardenzLogoNew.svg" alt="gardenzlogo" class="w-60">
// <a href="/">
// </a>

// <nav class="hidden w-full lg:flex justify-between items-center lg:items-center lg:w-auto">

// {/* Home and logout on top right */}
//   <div class="lg:flex text-center md:text-align">
//     <a class="text-white hover:text-green block my-6 py-2 px-6" href="/">Change Garden</a>
//     <a href="/" class="text-white hover:text-green block my-6 py-2 px-6">Sign out</a>
//   </div>
// </nav>

// {/* about us - shop */}
// <nav>
//   <div class="lg:flex flex-row text-center md:text-align bg-lightGreen">
//     <a class="text-white hover:text-green block my-6  py-2 px-6 basis-1/4 " href="/gardens/1/about">Update Cover Photo</a>
//     <a class="text-white hover:text-green block my-6  py-2 px-6 basis-1/4  " href="/gardens/1/events">Add/Edit Events</a>
//     <a class="text-orange hover:text-green block my-6 py-2 px-6 basis-1/4 " href="/gardens/1/news" aria-current="page">Post News</a>
//     <a class="text-white hover:text-green block my-6  py-2 px-6 basis-1/4 " href="/gardens/1/gallery">Update Gallery</a>
//     <a class="text-white hover:text-green block my-6  py-2 px-6 basis-1/4 " href="/gardens/1/shop">Manage Orders</a>
//     <a class="text-white hover:text-green block my-6  py-2 px-6 basis-1/4 " href="/gardens/1/shop">Volunteers</a>
//   </div>
// </nav>
