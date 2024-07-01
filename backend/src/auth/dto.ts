import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';
import { Match } from 'src/utils/customValidationMethod';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'username is required.' })
  @IsString({ message: 'username must be a string.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Phone Number is required.' })
  phone: string;

  @Field()
  @IsNotEmpty({ message: 'Confirm Password is required.' })
  @Match('password', { message: 'Confirm Password must match the password.' })
  // must be the same as password
  confirmPassword: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;
  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}
