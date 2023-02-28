import { IReview } from "./reviews"

export interface IMovie{
 id: number
 name: string
 rating: number
 poster: string
 views: number
 review?: IReview[]
 fees: number
}