import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): UserService;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Users & {
        Friendship_Friendship_doctorToUsers: import(".prisma/client").Friendship[];
        Messages: import(".prisma/client").Messages[];
        Friendship: import(".prisma/client").Friendship[];
    })[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
