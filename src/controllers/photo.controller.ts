import { Request,Response } from "express";
import photos from "../model/photos";
import  fs  from "fs";


export async function getPhotos(req: Request, res: Response): Promise<Response>{
   const photo = await photos.find();
   return res.json(photo);
}

export async function getPhoto(req: Request, res: Response): Promise<Response>{
     const { id } = req.params;
     console.log(id)
     const photo = await photos.findById(id);
    
    return res.json(photo);

 }

export async function createPhoto(req: Request, res: Response): Promise<Response>{

   const {title,description} = req.params;
      const newPhoto = {
       title: title,
       description: description,
       filepath: req.file?.path,
      }  

      const photo = new photos(newPhoto)
 
        await photo.save();
        return res.json({
            message:'Photo created successfully',
            photo
        });
}

export async function deletePhoto(req: Request, res: Response): Promise<Response>{

   const {id} = req.params;
   const photo = await photos.findByIdAndDelete(id);
   return res.json({

      message:'Photo deleted successfully',
      photo

   });

}

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await photos.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}