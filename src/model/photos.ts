import {Schema,model,Document} from "mongoose";


const schema = new Schema ({

   title:"string",
   description:"string",
   imagePath:"string",
});

interface IPhoto extends Document {

    title:"string",
    description:"string",
    imagePath:"string",

}

export default model<IPhoto>('Photo',schema)


