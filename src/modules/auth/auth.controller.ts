import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return signupDto;
  }
}
