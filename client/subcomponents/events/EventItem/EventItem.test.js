import React from 'react'
import { render, screen } from '@testing-library/react'

import EventItem from './EventItem'

describe('Volunteer button', () => {
  it('displays for a member', () => {
    const address = 'random address'
    const event = {}
    const user = { token: 'dummy token' }

    render(<EventItem address={address} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button', { name: 'Volunteer' })
    expect(volunteerButton).toHaveTextContent('Volunteer')
  })

  it('notifies user to sign in', () => {
    const address = 'cool place'
    const event = {}
    const user = { token: null }

    render(<EventItem address={address} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button')
    expect(volunteerButton).toHaveTextContent('Please sign in to volunteer')
  })
})

describe('Social media link icons', () => {
  it('- Two link icons should exist for each event', () => {
    const address = 'hot place'
    const event = {}
    const user = { token: 'dummy token' }

    render(<EventItem address={address} event={event} user={user} />)
    const linkIcons = screen.getAllByRole('link')
    expect(linkIcons).toHaveLength(2)
  })

  it('-first icon link to have link to facebook', () => {
    const address = 'facebook place'
    const event = {}
    const user = { token: 'dummy token' }

    render(<EventItem address={address} event={event} user={user} />)
    const linkIcons = screen.getAllByRole('link')
    expect(linkIcons[0]).toHaveAttribute(
      'href',
      'https://www.facebook.com/sharer/sharer.php?'
    )
  })

  it('-first icon link to have link to twitter', () => {
    const address = 'twitter place'
    const event = {}
    const user = { token: 'dummy token' }

    render(<EventItem address={address} event={event} user={user} />)
    const linkIcons = screen.getAllByRole('link')
    expect(linkIcons[1]).toHaveAttribute(
      'href',
      'https://twitter.com/intent/tweet?'
    )
  })
})
