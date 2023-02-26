import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { Word } from './schemas/word.schema';
import { WordsService } from './words.service';
import { CreateWordDto } from './dtos/create-word.dto';
import { UpdateWordDto } from './dtos/update-word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get(':wordId')
  async getWord(@Param('wordId') wordId: string): Promise<Word> {
    return this.wordsService.getWordById(wordId);
  }

  @Get()
  async getWords(): Promise<Word[]> {
    return this.wordsService.getWords();
  }

  @Post()
  async createWord(@Body() createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsService.createWord(createWordDto);
  }

  @Patch(':wordId')
  async updateWord(
    @Param('wordId') wordId: string,
    @Body() updateWordDto: UpdateWordDto,
  ): Promise<Word> {
    return this.wordsService.updateWord(wordId, updateWordDto);
  }
}
