"use client"

import { notFound, useParams } from "next/navigation"
import { LISTINGS } from "@/data/listings"
import { useFavorites } from "@/hooks/useFavorites"

export default function ListingDetailsPage() {
  const params = useParams<{ id: string }>()
  const id = params?.id

  const listing = LISTINGS.find((l) => l.id === id)

  const { isFavorite, toggleFavorite } = useFavorites()

  if (!listing) notFound()

  const fav = isFavorite(listing.id)

  return (
    <div className="space-y-5">
      <section className="rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-semibold">{listing.title}</h1>
            <p className="mt-1 text-sm text-slate-600">
              {listing.area}, {listing.city}
            </p>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(listing.id)}
            className="w-full rounded-lg border px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 md:w-auto"
          >
            {fav ? "Saved to Favorites" : "Save to Favorites"}
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-700">{listing.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {listing.amenities.map((a) => (
            <span key={a} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              {a}
            </span>
          ))}
        </div>

        <p className="mt-5 text-base">
          ₦{listing.pricePerMonth.toLocaleString()} / month
        </p>
      </section>

      <section className="rounded-xl border bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-900">Photos</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {listing.images.map((src) => (
            <div key={src} className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
              <img src={src} alt={listing.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
