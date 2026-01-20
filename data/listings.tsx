// typescript
export type RoomType = "single" | "shared" | "studio"

export type Listing = {
  id: string
  title: string
  city: string
  area: string
  pricePerMonth: number
  roomType: RoomType
  description: string
  amenities: string[]
  images: string[]
}

export const LISTINGS: Listing[] = [
  {
    id: "hb-001",
    title: "Quiet Studio Near Campus Gate",
    city: "Minna",
    area: "Gidan Kwano",
    pricePerMonth: 120000,
    roomType: "studio",
    description:
      "A compact studio apartment close to the main campus gate. Good ventilation, steady water, and a calm environment for studying.",
    amenities: ["Water", "Security", "Prepaid Meter", "Parking"],
    images: [
      "https://picsum.photos/seed/hb-001a/1200/800",
      "https://picsum.photos/seed/hb-001b/1200/800",
      "https://picsum.photos/seed/hb-001c/1200/800",
    ],
  },
  {
    id: "hb-002",
    title: "Affordable Shared Room (2 in a room)",
    city: "Minna",
    area: "Bosso",
    pricePerMonth: 60000,
    roomType: "shared",
    description:
      "Budget-friendly shared accommodation suitable for students who want to cut costs while staying in a decent location.",
    amenities: ["Water", "Security", "Fan", "Nearby Transport"],
    images: [
      "https://picsum.photos/seed/hb-002a/1200/800",
      "https://picsum.photos/seed/hb-002b/1200/800",
    ],
  },
  {
    id: "hb-003",
    title: "Single Room + Bathroom (Self Contained)",
    city: "Minna",
    area: "Tunga",
    pricePerMonth: 95000,
    roomType: "single",
    description:
      "Self-contained single room with private bathroom. Clean compound, decent access roads, and a quiet neighborhood.",
    amenities: ["Water", "Security", "Private Bathroom", "Prepaid Meter"],
    images: [
      "https://picsum.photos/seed/hb-003a/1200/800",
      "https://picsum.photos/seed/hb-003b/1200/800",
    ],
  },
  {
    id: "hb-004",
    title: "Modern Studio With Small Kitchenette",
    city: "Ilorin",
    area: "Tanke",
    pricePerMonth: 180000,
    roomType: "studio",
    description:
      "A more modern studio option with a kitchenette and better finishing. Suitable for a student who wants privacy and comfort.",
    amenities: ["Water", "Security", "Kitchenette", "Prepaid Meter", "Parking"],
    images: [
      "https://picsum.photos/seed/hb-004a/1200/800",
      "https://picsum.photos/seed/hb-004b/1200/800",
      "https://picsum.photos/seed/hb-004c/1200/800",
    ],
  },
]
