export interface City{
    id: string
    geonameId: number
    type: string
    name: string 
    population: number
    elevation: number 
    timezoneId: string
    country: Country
    adminDivision1: Country 
    adminDivision2: Country
    score: number
    coordinates: coordinates
   
}

export interface Country {
    id: string
    geonameId: number
    name: string
}



export interface coordinates{
    latitude: number
    longitude: number
    
}

