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
})
