// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { CreditsCard } from '../src/client/CreditsCard.tsx'
import { en } from '../src/client/locales.ts'

afterEach(cleanup)

const t = (key: keyof typeof en) => en[key]

describe('CreditsCard', () => {
  it('offers three token packs and marks the middle one as best value', () => {
    render(<CreditsCard t={t} />)
    expect(screen.getAllByRole('button').map(button => button.getAttribute('aria-label'))).toEqual([
      '1M tokens — $5',
      '5M tokens — $20',
      '20M tokens — $70',
    ])
    expect(screen.getByText('Best value')).toBeTruthy()
  })

  it('confirms the amount and opens checkout with the exact pack', () => {
    render(<CreditsCard t={t} />)
    fireEvent.click(screen.getByRole('button', { name: '5M tokens — $20' }))
    expect(screen.getByText('Buy 5M tokens for $20. Checkout opens in your browser.')).toBeTruthy()
    const checkout = screen.getByRole('link', { name: 'Continue to checkout' })
    expect(checkout.getAttribute('target')).toBe('_blank')
    expect(checkout.getAttribute('href')).toBe('https://zharfa.ai/codez/tokens?pack=pro&tokens=5000000')
  })

  it('closes the confirmation without buying', () => {
    render(<CreditsCard t={t} />)
    fireEvent.click(screen.getByRole('button', { name: '1M tokens — $5' }))
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByRole('link', { name: 'Continue to checkout' })).toBeNull()
  })
})
