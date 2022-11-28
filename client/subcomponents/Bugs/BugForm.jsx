import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const eventSchema = Yup.object({
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
})

export default function BugForm(props) {
  const navigate = useNavigate()
  console.log(props)

  function handleSubmit(event) {
    event.preventDefault()

    const title = event.currentTarget.elements.title.value
    const body = event.currentTarget.elements.body.value
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          className="border-blue border-2
          "
          required={true}
        />
        <input type="text" name="body" required={true} />
        <button className="submit form-box" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
