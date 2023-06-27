import { Controller, Post, Body } from '@nestjs/common';
import { ChatGptAiService } from './chat-gpt-ai.service';
import { GetModelAnswer } from './module/get-chat-gpt-answer';
@Controller('chat-gpt-ai')
export class ChatGptAiController  {
    constructor(private readonly service:ChatGptAiService){}
    @Post("/message")
    getModelAnswer(@Body() data: GetModelAnswer){
        console.log(this.service.getModelAnswer(data.question));
        return this.service.getModelAnswer(data.question)
    }
}
