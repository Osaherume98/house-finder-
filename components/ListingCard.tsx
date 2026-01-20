// typescript
"use client"

import Link from "next/link"
import { Listing } from "@/data/listings"
import { useFavorites } from "@/hooks/useFavorites"

type Props = {
  listing: Listing
}

export function ListingCard({ listing }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(listing.id)

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Link href={`/listing/${listing.id}`} className="block">
        <div className="aspect-[16/10] w-full bg-slate-100">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/listing/${listing.id}`} className="text-sm font-semibold text-slate-900">
              {listing.title}
            </Link>
            <p className="mt-1 text-xs text-slate-600">
              {listing.area}, {listing.city}
            </p>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(listing.id)}
            className="rounded-lg border px-3 py-2 text-xs text-slate-700 hover:bg-slate-50"
            aria-label={fav ? "Remove from favorites" : "Save to favorites"}
          >
            {fav ? "Saved" : "Save"}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-slate-900">
            ₦{listing.pricePerMonth.toLocaleString()} / month
          </p>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
            {listing.roomType}
          </span>
        </div>
      </div>
    </div>
  )
}
