import { useCallback } from 'react'

export const useKeepCallback = (cb: (...args: any[]) => any) =>
  useCallback(cb, [])
