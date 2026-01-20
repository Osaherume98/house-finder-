"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "student_housing_favorites"

function safeParse(value: string | null): string[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed) && parsed.every((x) => typeof x === "string")) return parsed
    return []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])

  useEffect(() => {
    const initial = safeParse(localStorage.getItem(STORAGE_KEY))
    setFavoriteIds(initial)
  }, [])

  const favoritesSet = useMemo(() => new Set(favoriteIds), [favoriteIds])

  const isFavorite = useCallback(
    (id: string) => {
      return favoritesSet.has(id)
    },
    [favoritesSet]
  )

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const clearFavorites = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setFavoriteIds([])
  }, [])

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
    clearFavorites,
  }
}
