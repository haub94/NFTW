export interface CustomerData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  contactMessage: string;
  applicationMessage: string;
  journeyConfig: string;
  image: string;
  testimonial: string;
}

export interface RatingData {
  testimonial: string;
  amountStars: string;
  ratingText: string;
}

export interface JourneyPurposeData {
  name: string;
  promoText: string;
  price: string;
  includedServices: string;
  image: string;
  startDate: string;
  endDate: string;
  routePath: string;
}

export interface ImageData {
  name: string;
  path: string;
  altText: string;
}

export interface DestinationData {
  name: string;
  promoText: string;
  timeslot: string;
  price: string;
  days: string;
  availableUnits: string;
  image: string;
  hotel: string;
  startDate: string;
  endDate: string;
  routePath: string;
}
