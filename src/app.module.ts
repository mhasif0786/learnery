import { Module } from '@nestjs/common';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';

@Module({
  imports: [ChatGptAiModule]
})
export class AppModule {}
