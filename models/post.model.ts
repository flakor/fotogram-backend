

import { Schema, model} from 'mongoose';
import { IPost } from '../interfaces/post';

const postSchema = new Schema({
    created:{
        type: Date
    },
    mensaje: {
        type: String
    },
    imgs:[{
        type: String
    }],
    coords:{
        type: String  // -12.1222, 1221
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Debe de existir una referencia a un usuario']
    }
});

postSchema.pre<IPost>('save', function(next){
    this.created = new Date();
    next();
});




export const Post = model<IPost>('Post', postSchema);
