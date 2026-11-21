/** Shared provider display order for the composer and command model pickers. */

/** Company, Qwen, account, and official providers lead in that order; every other provider follows. */
const providerRank = (id: string): number =>
  id === 'zharfa' ? 0
    : id === 'zharfa-qwen' ? 1
      : id === 'deepseek-account' ? 2
        : id === 'deepseek-official' ? 3
          : 4

/**
 * Put the company, Qwen, account, and official providers first, preserving every other relative order.
 * @param groups - Provider groups in catalog order.
 * @returns a sorted copy; model order within each group is unchanged.
 */
export function orderModelProviders<T extends { readonly id: string }>(groups: readonly T[]): T[] {
  return groups.toSorted((left, right) => providerRank(left.id) - providerRank(right.id))
}
