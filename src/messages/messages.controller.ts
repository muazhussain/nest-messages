import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './Dto/class-validator.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);
    }

    @Get(':/id')
    getMessage(@Param() id: string) {
        console.log(id);
    }
}
