import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { registerUser } from './registerHelper'
import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import { formButtonVariants } from '../../pages/animationVariants'
import { showError } from '../../actions/error'
import { getAllGardens } from '../../pages/Gardens/gardensHelper'

import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  gardenId: Yup.number().required('Required'),
})

export default function Register() {
  const authUser = useAuth0().user
  const navigate = useNavigate()
  const isAdmin = useSelector((globalState) => globalState.user?.isAdmin)
  const [gardenList, setGardenList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getAllGardens()
      .then((gardens) => {
        setGardenList(gardens)
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
        return false
      })
  }, [])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gardenId: '',
    },
    onSubmit: (values) => {
      registerUser(values, isAdmin, authUser, navigate)
    },
    validationSchema: registerSchema,
  })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }
  return (
    <>
      <h2>Register to view garden events</h2>
      <section className="flex-container centre-flex">
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            {showAnyErrors('firstName')}
            <input
              className="form-box"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            {showAnyErrors('lastName')}
            <input
              className="form-box"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label htmlFor="garden" className="label">
              My Garden
            </label>
            {showAnyErrors('garden')}
            <select
              className="form-box"
              name="gardenId"
              id="garden"
              onChange={formik.handleChange}
              value={formik.values.gardenId}
            >
              <option hidden>Select from this list</option>
              {gardenList.map((garden) => {
                return (
                  <option key={garden.id} value={garden.id}>
                    {garden.name}
                  </option>
                )
              })}
            </select>
          </div>
          <motion.button
            className="submit profile-submit"
            type="submit"
            data-testid="submitButton"
            variants={formButtonVariants}
            whileHover="hover"
          >
            Register
          </motion.button>
        </form>
      </section>
    </>
  )
}
