import { IMovie } from './movie';
import { IUser } from './userInterfaces';

export interface IReview{
 id: number
 user: IUser
 movie: IMovie
 description: string
}