export type RoomType = "single" | "shared" | "studio"

export type Listing = {
  id: string
  title: string
  city: string
  area: string
  pricePerMonth: number
  roomType: string
  description: string
  amenities: string[]
  images?: string[]
  videoSrc?: string
  videoPoster?: string
}

export const LISTINGS = [
  {
    id: "os-01",
    title: "Fully Furnished Compact 2-bedroom flat (ground floor) in a recently built property",
    city: "Lagos",
    area: "Off Onikoyi, Aguda, Surulere",
    pricePerMonth: 5000000,
    roomType: "Studio Apartment",
    description: "Open-plan kitchen, 1 toilet & bath, POP ceiling, screeded walls, fitted kitchen.",
    amenities: ["ACs", "Wardrobes", "chandelier", "gas burner", "prepaid meter"],
    images: [
      "/listings/os-01/cover.jpeg",
      "/listings/os-01/room.jpeg",
      "/listings/os-01/kitchen.jpeg",
      "/listings/os-01/bathroom.jpeg",
    ],
    
  },
  {
    id: "os-02",
    title: "FOR SALE",
    city: "Lagos",
    area: "Bode Thomas, Surulere",
    pricePerMonth: 330000000,
    roomType: "4 Bedroom Terrace Duplex With BQ",
    description: "NEWLY BUILT FULLY FURNISHED 4-BEDROOM TERRACE DUPLEX WITH BQ",
    amenities: ["Fully Furnished", "Pop ceiling with Screeded walls", "chandelier fittings", "FItted Wardrobes", "Spacious Car Park"],
    images: [],
    videoSrc: "/listings/os-02/video/placeholder.mp4",
    videoPoster: "/listings/os-02/video-cover.jpg",

  },
]

