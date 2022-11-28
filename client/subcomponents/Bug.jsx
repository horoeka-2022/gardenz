import React from 'react'
import { Link } from 'react-router-dom'

export default function Bug() {
  return (
    <div className=" mx-auto relative">
      <Link to="/bugs">
        <img
          src="/images/bugIcon.png"
          alt="bug icon"
          className="w-10 h-10 md:float-right mr-8"
        />
      </Link>
    </div>
  )
}
