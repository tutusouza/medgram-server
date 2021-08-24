import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    create(createUserDto: CreateUserDto) {
        return this;
    }

    findAll() {
        return this.prisma.users.findMany({
            include: {
                Friendship_Friendship_doctorToUsers: true,
                Messages: true,
                Friendship: true,
            },
        });
    }

    findOne(id: number) {
        return `findOne action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `update action updates a #${id} user`;
    }

    remove(id: number) {
        return `remove action removes a #${id} user`;
    }
}
