import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  guest: Guest;

  @Field({ nullable: true })
  admin: Admin;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export class Guest {
  @Field()
  id: string;
  @Field({ nullable: true })
  address: string;
  @Field({ nullable: true })
  avatar: string;
  @Field({ nullable: true })
  dob: string;
  @Field()
  user: User;
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
}

export class Admin {
  @Field()
  id: string;
  @Field()
  user: User;
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
}
