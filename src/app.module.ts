import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { MessageModule } from './message/message.module';
@Module({
    imports: [UserModule, MessageModule],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
