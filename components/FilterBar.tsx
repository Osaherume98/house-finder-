// typescript
"use client"

import { RoomType } from "@/data/listings"

type Props = {
  search: string
  setSearch: (v: string) => void
  city: string
  setCity: (v: string) => void
  roomType: "" | RoomType
  setRoomType: (v: "" | RoomType) => void
  maxPrice: string
  setMaxPrice: (v: string) => void
  availableCities: string[]
}

export function FilterBar({
  search,
  setSearch,
  city,
  setCity,
  roomType,
  setRoomType,
  maxPrice,
  setMaxPrice,
  availableCities,
}: Props) {
  return (
    <section className="rounded-xl border bg-white p-4">
      <div className="grid gap-3 md:grid-cols-4">
        <div className="md:col-span-2">
          <label className="block text-xs text-slate-600">Search</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Try: studio, Minna, Bosso..."
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-600">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          >
            <option value="">All cities</option>
            {availableCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-600">Room type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value as "" | RoomType)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          >
            <option value="">All types</option>
            <option value="single">Single</option>
            <option value="shared">Shared</option>
            <option value="studio">Studio</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs text-slate-600">Max price (per month)</label>
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 120000"
            inputMode="numeric"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div className="md:col-span-2 flex items-end gap-2">
          <button
            type="button"
            onClick={() => {
              setSearch("")
              setCity("")
              setRoomType("")
              setMaxPrice("")
            }}
            className="w-full rounded-lg border px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            Reset filters
          </button>
        </div>
      </div>
    </section>
  )
}
