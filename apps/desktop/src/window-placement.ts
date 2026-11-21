/** Keep a restored desktop window reachable when its saved display is gone. */

/** Integer window or work-area rectangle. */
export interface PlacementRect {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Compute a centred position only when bounds miss every display work area.
 * @param bounds - restored window rectangle.
 * @param displays - current work areas, primary first.
 * @returns the position to apply, or undefined when the window is already reachable.
 */
export function placementFor(
  bounds: PlacementRect, displays: readonly { workArea: PlacementRect }[],
): { x: number; y: number } | undefined {
  const reachable = displays.some(({ workArea }) =>
    bounds.x < workArea.x + workArea.width && bounds.x + bounds.width > workArea.x
    && bounds.y < workArea.y + workArea.height && bounds.y + bounds.height > workArea.y)
  const area = displays[0]?.workArea
  if (reachable || area === undefined) return undefined
  return {
    x: Math.round(area.x + (area.width - bounds.width) / 2),
    y: Math.round(area.y + (area.height - bounds.height) / 2),
  }
}
