"use client"

import Link from "next/link"
import { Listing } from "@/data/listings" 
import { useFavorites } from "@/hooks/useFavorites"

type Props = {
  listing: Listing
}

function getCardCover(listing: Listing) {
  if (Array.isArray(listing.images) && listing.images.length > 0) return listing.images[0]
  if (listing.videoPoster) return listing.videoPoster
  return "/listings/placeholder.jpg"
}

export function ListingCard({ listing }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(listing.id)
  const cover = getCardCover(listing)
  


  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Link href={`/listing/${listing.id}`} className="block">

        <div className="relative aspect-[16/10] w-full bg-slate-100">
          {cover ? (
            <img src={cover} alt={listing.title} className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm bg-slate-600">
              No cover image
            </div>
          )}

          {listing.videoSrc ? (
            <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              Video tour
            </div>
          ) : null}
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
            {listing.isSale || listing.price 
              ? `₦${(listing.price || 0).toLocaleString()}`
              : `₦${(listing.pricePerMonth || 0).toLocaleString()} / month`
            }
          </p>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
            {listing.roomType}
          </span>
        </div>
      </div>
    </div>
  )
}
