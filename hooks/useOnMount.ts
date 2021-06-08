import { EffectCallback, useEffect } from 'react'

export const useOnMount = (cb: EffectCallback) => useEffect(cb, [])
