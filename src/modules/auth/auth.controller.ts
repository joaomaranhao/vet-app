import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    const { email, password } = signupDto;
    const user = await this.authService.signup(email, password);
    return user;
  }
}
