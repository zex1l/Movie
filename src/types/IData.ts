export interface IData {
    poster: IPoster
    name: string
    description: string
    externalId: IExternalIdd
    id: string
}

export interface IPoster {
    previewUrl: string
    url: string
}

export interface IExternalIdd {
    imdb: string
    kpHD: string
    tmdb: string
}