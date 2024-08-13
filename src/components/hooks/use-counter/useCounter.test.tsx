import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should initialize count to 0', () => {
    const { result } = renderHook(useCounter) // for custom hooks
    expect(result.current.count).toBe(0)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment()) // for propertis or functions that manage the state or causes the test updates.
    expect(result.current.count).toBe(1)
  })
})
