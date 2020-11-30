import React from 'react'
import { Link } from 'react-router-dom'

function EventItem ({ event, isAdmin }) {
  const { id, title, datetime, volunteersNeeded, description } = event
  return (
    <div>
      <h4 className="is-pulled-left">{title}</h4>
      {
        isAdmin
          ? <Link to={`/events/${id}/edit`} className="button is-primary is-pulled-right">Edit Event</Link>
          : null
      }
      <p className="clearfix">{datetime}</p>
      <p>{volunteersNeeded} volunteers needed</p>
      <p>{description}</p>
    </div>
  )
}

export default EventItem
