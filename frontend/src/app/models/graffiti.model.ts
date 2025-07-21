// src/app/models/graffiti.model.ts
export interface Graffiti {
  _id?: string;
  title: string;
  artist: string;
  location: string;
  imageUrl: string;
  description: string;
  createdAt?: string;
  likes?: number;
  dislikes?: number;
}
