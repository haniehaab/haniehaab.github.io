export interface WeatherData{
    coord: GeolocationCoordinates
    weather: Weather[]
    base: string
    main: Main 
    visibility: number
    wind: Wind 
    clouds: Clouds
    dt: number
    sys: Sys 
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Coord {
    lon: number
    lat: number
}

export interface Weather{
    id: number
    main: string
    description: string
    icon: string
}

export interface Main{
    temp: number
    feelslike: number
    temp_max: number
    temp_min: number
    pressure: number
    humidity: number
}

export interface Wind{
    speed: number
    deg: number
}

export interface Clouds{
    all: number
}


export interface Sys{
    all: number
}