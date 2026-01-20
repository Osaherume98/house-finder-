// typescript
"use client"

import { useMemo, useState } from "react"
import { LISTINGS, RoomType } from "@/data/listings"
import { FilterBar } from "@/components/FilterBar"
import { ListingCard } from "@/components/ListingCard"

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("")
  const [roomType, setRoomType] = useState<"" | RoomType>("")
  const [maxPrice, setMaxPrice] = useState("")

  const availableCities = useMemo(() => {
    return Array.from(new Set(LISTINGS.map((l) => l.city))).sort()
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const max = maxPrice.trim() ? Number(maxPrice) : null

    return LISTINGS.filter((l) => {
      const matchesSearch =
        !q ||
        l.title.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        l.area.toLowerCase().includes(q) ||
        l.roomType.toLowerCase().includes(q)

      const matchesCity = !city || l.city === city
      const matchesRoomType = !roomType || l.roomType === roomType
      const matchesMaxPrice = max === null || (Number.isFinite(max) && l.pricePerMonth <= max)

      return matchesSearch && matchesCity && matchesRoomType && matchesMaxPrice
    })
  }, [search, city, roomType, maxPrice])

  return (
    <div className="space-y-5">
      <section className="rounded-xl border bg-white p-5">
        <h1 className="text-xl font-semibold">Find student housing</h1>
        <p className="mt-1 text-sm text-slate-600">
          Browse listings, filter by what you can afford, and save your favorites.
        </p>
      </section>

      <FilterBar
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        roomType={roomType}
        setRoomType={setRoomType}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        availableCities={availableCities}
      />

      <section>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-slate-700">
            Showing {filtered.length} of {LISTINGS.length} listings
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border bg-white p-6 text-sm text-slate-700">
            No listings match your filters. Try removing a filter.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
