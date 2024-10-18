import { AuthService } from './auth.service';
import { LogInRequestDto } from './dto/login.dto';
import { RegisterRequestDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerRequestDto: RegisterRequestDto): Promise<{
        access_token: string;
    }>;
    login(logInRequestDto: LogInRequestDto): Promise<{
        access_token: string;
        userId: number;
    }>;
}
