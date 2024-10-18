/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInRequestDto } from './dto/login.dto';
import { RegisterRequestDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerRequestDto: RegisterRequestDto) {
    return this.authService.register(registerRequestDto);
  }

  @Post('login')
  async login(@Body() logInRequestDto: LogInRequestDto) {
    return this.authService.logIn(logInRequestDto);
  }
}
