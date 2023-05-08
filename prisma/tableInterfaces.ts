export interface CUSTOMER_DATA {
    firstName: string,
    lastName: string,
    emailAddress: string       
    contactMessage: string     
    applicationMessage: string 
    journeyConfig: string      
    image: string              
    testimonial: string        
}

export interface RATING_DATA {
    testimonial: string
    amountStars: string
    ratingText: string 
}

export interface JOURNEY_PURPOSE {
    name: string             
    promoText: string        
    price: string            
    includedServices: string 
    image: string            
}

export interface IMAGES {
    name: string    
    path: string    
    altText: string 
}

export interface DESTINATION {
    name: string
    promoText: string
    timeslot: string
    price: string
    days: string
    availableUnits: string
    image: string
    hotel: string
}