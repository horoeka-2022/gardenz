import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BugForm from './BugForm'
import { renderWithRouter } from '../../test-utils'

describe('bug form field', () => {
  it('updates on user input', async () => {
    renderWithRouter(<BugForm />)
    const titleInput = screen.getByRole('textbox', {
      name: 'Summary of the issue',
    })
    const bodyInput = screen.getByRole('textbox', {
      name: 'Detailed steps to reproduce the issue',
    })
    userEvent.type(titleInput, 'test title')
    userEvent.type(bodyInput, 'test body')

    await waitFor(() => {
      expect(titleInput).toHaveValue('test title')
      expect(bodyInput).toHaveValue('test body')
    })
  })

  it('required comes up on invalid input', async () => {
    const handleSubmit = jest.fn()
    renderWithRouter(<BugForm onSubmit={handleSubmit} />)
    userEvent.clear(screen.getByLabelText(/summary/i))
    userEvent.clear(screen.getByLabelText(/steps/i))

    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    const ele = await screen.findAllByText('Required')
    expect(ele[0]).toBeInTheDocument()
  })
})
