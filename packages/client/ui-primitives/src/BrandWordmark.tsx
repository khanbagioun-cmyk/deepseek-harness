import type { IconProps } from './icons/props.ts'

/** Display options for the CodeZ brand wordmark. */
export interface BrandWordmarkProps extends IconProps {
  /** Whether to include the leading app mark; defaults to true. */
  includeMark?: boolean | undefined
}

/** Width divided by height of the canonical wordmark viewBox. */
const WORDMARK_RATIO = 3.7814

/**
 * Render the CodeZ wordmark as a currentColor mask.
 * @param props.size - wordmark height in px (default 24).
 * @param props.className - extra class for layout placement.
 * @param props.includeMark - whether to include the leading app mark.
 * @returns the decorative brand wordmark.
 */
export function BrandWordmark({ size = 24, className, includeMark = true }: BrandWordmarkProps) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3, whiteSpace: 'nowrap' }}
    >
      {includeMark ? (
        <img src="/brand/codez-symbol.svg" alt="" width={size * 0.9} height={size * 0.9} style={{ display: 'block' }} />
      ) : null}
      <span
        style={{
          display: 'block',
          width: size * 0.95 * WORDMARK_RATIO,
          height: size * 0.95,
          backgroundColor: 'currentColor',
          WebkitMaskImage: 'url(/brand/codez-wordmark.svg)',
          maskImage: 'url(/brand/codez-wordmark.svg)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    </span>
  )
}
