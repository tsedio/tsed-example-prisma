import { Post } from "../client";
import { Integer, Required, Property, Groups, Allow } from "@tsed/schema";
import { UserModel } from "./UserModel";

export class PostModel implements Post {
  @Property(Number)
  @Integer()
  @Required()
  @Groups('!creation')
  id: number;

  @Property(String)
  @Required()
  title: string;

  @Property(String)
  @Allow(null)
  content: string | null;

  @Property(Boolean)
  @Allow(null)
  @Groups('!creation')
  published: boolean | null;

  @Property(() => UserModel)
  @Allow(null)
  @Groups('!creation')
  author: UserModel | null;

  @Property(Number)
  @Integer()
  @Allow(null)
  @Groups('!creation')
  authorId: number | null;
}

