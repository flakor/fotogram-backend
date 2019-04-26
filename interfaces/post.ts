import { Document } from 'mongoose';

export interface IPost extends Document{
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;

}