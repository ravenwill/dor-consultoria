export interface CovidResponse {
    data: CovidResponseData[]
}

export interface CovidResponseData {
    country: string,
    cases: number,
    confirmed: number,
    deaths: number,
    recovered: number,
    updated_at: Date
}
