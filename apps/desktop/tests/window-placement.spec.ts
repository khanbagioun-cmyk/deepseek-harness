import { describe, expect, it } from 'vitest'
import { placementFor } from '../src/window-placement.ts'

const primary = { workArea: { x: 0, y: 0, width: 1440, height: 900 } }
const secondary = { workArea: { x: 1440, y: 0, width: 1280, height: 800 } }

describe('window placement', () => {
  it('keeps reachable and partially overlapping windows untouched', () => {
    expect(placementFor({ x: 100, y: 100, width: 800, height: 600 }, [primary])).toBeUndefined()
    expect(placementFor({ x: -700, y: 100, width: 800, height: 600 }, [primary])).toBeUndefined()
    expect(placementFor({ x: 2000, y: 100, width: 800, height: 600 }, [primary, secondary])).toBeUndefined()
  })

  it('centres on the primary work area when every display misses the window', () => {
    expect(placementFor({ x: 5000, y: 300, width: 800, height: 600 }, [primary])).toEqual({ x: 320, y: 150 })
  })

  it('does nothing when there is no display to centre on', () => {
    expect(placementFor({ x: 5000, y: 300, width: 800, height: 600 }, [])).toBeUndefined()
  })
})
