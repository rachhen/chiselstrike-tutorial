import { ChiselEntity } from "@chiselstrike/api";

export class BlogPost extends ChiselEntity {
  author: string = "Anonymous";
  content: string;
  publishedAt: number;
  hidden: boolean;
}
