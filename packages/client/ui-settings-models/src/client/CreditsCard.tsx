/** Prepaid Zharfa token packs for the company API shown below the provider list. */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Button, Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import type { en } from './locales.ts'
import styles from './ModelsSection.module.css'

/** Public checkout that turns a selected pack into an order. */
const PURCHASE_URL = 'https://zharfa.ai/codez/tokens'

interface TokenPack {
  readonly id: 'starter' | 'pro' | 'scale'
  readonly tokens: number
  readonly label: keyof typeof en
  readonly price: keyof typeof en
  readonly amount: string
  readonly popular?: boolean
}

const PACKS: readonly TokenPack[] = [
  { id: 'starter', tokens: 1_000_000, label: 'creditsPackSmall', price: 'creditsPriceSmall', amount: '$5' },
  { id: 'pro', tokens: 5_000_000, label: 'creditsPackMedium', price: 'creditsPriceMedium', amount: '$20', popular: true },
  { id: 'scale', tokens: 20_000_000, label: 'creditsPackLarge', price: 'creditsPriceLarge', amount: '$70' },
]

/** @param pack - selected pack. @returns its checkout URL carrying the exact token amount. */
function checkoutUrl(pack: TokenPack): string {
  const url = new URL(PURCHASE_URL)
  url.searchParams.set('pack', pack.id)
  url.searchParams.set('tokens', String(pack.tokens))
  return url.href
}

/**
 * Render the token top-up card: three priced packs and a confirmation before checkout.
 * @param props.t - Models-section localizer.
 * @returns the token purchase card.
 */
export function CreditsCard({ t }: { t: (key: keyof typeof en) => string }): ReactNode {
  const [selected, setSelected] = useState<TokenPack | null>(null)
  const description = selected === null
    ? ''
    : t('creditsBuyDescription').replace('{tokens}', t(selected.label)).replace('{price}', selected.amount)
  return <>
    <section className={styles.credits} aria-labelledby="settings-models-credits-title">
      <header className={styles.creditsHead}>
        <h3 id="settings-models-credits-title" className={styles.creditsTitle}>{t('creditsTitle')}</h3>
        <p className={styles.creditsBody}>{t('creditsBody')}</p>
      </header>
      <p className={styles.creditsChoose}>{t('creditsChoose')}</p>
      <div className={styles.creditsPacks}>
        {PACKS.map(pack => (
          <button
            key={pack.id}
            type="button"
            className={`${styles.creditsPack} ${pack.popular === true ? styles.creditsPackPopular : ''}`}
            aria-label={`${t(pack.label)} — ${t(pack.price)}`}
            onClick={() => { setSelected(pack) }}
          >
            {pack.popular === true && <span className={styles.creditsBadge}>{t('creditsPackPopular')}</span>}
            <span className={styles.creditsTokens}>{t(pack.label)}</span>
            <span className={styles.creditsPrice}>{t(pack.price)}</span>
            <span className={styles.creditsBuy}>{t('creditsBuy')}</span>
          </button>
        ))}
      </div>
    </section>
    <Modal
      open={selected !== null}
      onClose={() => { setSelected(null) }}
      title={t('creditsBuyTitle')}
      closeLabel={t('close')}
      description={description}
      footer={selected === null ? null : (
        <>
          <Button variant="outline" data-modal-autofocus onClick={() => { setSelected(null) }}>{t('cancel')}</Button>
          <a className={styles.creditsCheckout} href={checkoutUrl(selected)} target="_blank" rel="noreferrer">
            {t('creditsCheckout')}
          </a>
        </>
      )}
    />
  </>
}
