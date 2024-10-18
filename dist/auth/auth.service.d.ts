import { JwtService } from '@nestjs/jwt';
import { LogInRequestDto } from './dto/login.dto';
import { RegisterRequestDto } from './dto/register.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
export declare class AuthService {
    private usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(user: RegisterRequestDto): Promise<{
        access_token: string;
    }>;
    logIn({ email, password }: LogInRequestDto): Promise<{
        access_token: string;
        userId: number;
    }>;
    findOneByEmail(email: string): Promise<User | undefined>;
}
