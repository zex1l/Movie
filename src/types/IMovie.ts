import {IPoster} from './IData'

export interface IMovie {
    id: number
    type: string
    name: string
    description: string
    year: number
    poster: IPoster
    genres: IGenres[]
    countries: ICountries[]
    person: IPerson
    watchability: IWatchability
    rating: IRatingCinemas
}

export interface IBudget {
    value: number
    currency: string
}

export interface IGenres {
    name: string
}

export interface IPerson {
    id: string
    photo: string
    name: string
    description: string
}

export interface ICountries {
    name: string
}

export interface IWatchability {
    items: IService[]
}

export interface IService {
    logo: ILogoCinema
    name: string
    url: string
}

export interface ILogoCinema {
    url: string
}

export interface IRatingCinemas {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: number
}