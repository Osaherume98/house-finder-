"use client"

import Link from "next/link"
import { LISTINGS } from "@/data/listings"
import { ListingCard } from "@/components/ListingCard"
import { useFavorites } from "@/hooks/useFavorites"

export default function FavoritesPage() {
  const { favoriteIds, clearFavorites } = useFavorites()

  const favorites = LISTINGS.filter((l) => favoriteIds.includes(l.id))

  return (
    <div className="space-y-5">
      <section className="rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-semibold">Favorites</h1>
            <p className="mt-1 text-sm text-slate-600">
              Listings you saved are stored in your browser (localStorage).
            </p>
          </div>

          {favoriteIds.length > 0 && (
            <button
              type="button"
              onClick={clearFavorites}
              className="w-full rounded-lg border px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 md:w-auto"
            >
              Clear favorites
            </button>
          )}
        </div>
      </section>

      {favorites.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-sm text-slate-700">
          You have no favorites yet. Go back to{" "}
          <Link href="/" className="underline">
            listings
          </Link>{" "}
          and save some.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </div>
  )
}
