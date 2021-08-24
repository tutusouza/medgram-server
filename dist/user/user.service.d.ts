import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): this;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Users & {
        Friendship_Friendship_doctorToUsers: import(".prisma/client").Friendship[];
        Messages: import(".prisma/client").Messages[];
        Friendship: import(".prisma/client").Friendship[];
    })[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
