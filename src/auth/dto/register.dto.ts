/* eslint-disable prettier/prettier */
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class RegisterRequestDto {
  @IsString()
  username: string;
  
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password too weak" })
  password: string;
}
