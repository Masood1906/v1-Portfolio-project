"use client"

import { useCallback, useRef } from "react"

// This is a custom implementation to replace useEffectEvent
export function useEvent<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback)

  // Update ref when callback changes
  callbackRef.current = callback

  return useCallback((...args: any[]) => {
    return callbackRef.current(...args)
  }, []) as T
}
