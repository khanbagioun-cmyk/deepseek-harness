/** Address of the deployment's own Zharfa API route. */
export const COMPANY_PROVIDER = 'zharfa'

/** Settings namespace owning the Zharfa route profile. */
export const COMPANY_SETTINGS_NS = 'llm-pi-ai'

/** Settings path to the `zharfa` route profile. */
export const COMPANY_SETTINGS_PATH = ['providers', COMPANY_PROVIDER] as const

/**
 * Test whether a provider id names the company route.
 * @param provider - provider id.
 * @returns whether it is the company route.
 */
export function isCompanyProvider(provider: string): boolean {
  return provider === COMPANY_PROVIDER
}

/**
 * Directory rank for a provider id; the company route leads.
 * @param provider - provider id.
 * @returns its directory order.
 */
export function providerRank(provider: string): number {
  if (isCompanyProvider(provider)) return 0
  if (provider === 'zharfa-qwen') return 1
  if (provider === 'deepseek-account') return 2
  if (provider === 'deepseek-official') return 3
  return 4
}
