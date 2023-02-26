import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { WordsRepository } from './words.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from './schemas/word.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  providers: [WordsService, WordsRepository],
  controllers: [WordsController],
})
export class WordsModule {}
