import { User } from "../client";
import { Integer, Required, Property, Groups, Email, Allow, CollectionOf } from "@tsed/schema";
import { PostModel } from "./PostModel";

export class UserModel implements User {
  @Property(Number)
  @Integer()
  @Required()
  @Groups('!creation')
  id: number;

  @Property(String)
  @Required()
  @Email()
  email: string;

  @Property(String)
  @Allow(null)
  name: string | null;

  @CollectionOf(() => PostModel)
  @Required()
  @Groups('!creation')
  posts: PostModel[];
}

