import { Injectable } from '@nestjs/common';

import { Word } from './schemas/word.schema';
import { WordsRepository } from './words.repository';
import * as crypto from 'crypto';
import { UpdateWordDto } from './dtos/update-word.dto';
import { CreateWordDto } from './dtos/create-word.dto';

@Injectable()
export class WordsService {
  constructor(private readonly wordsRepository: WordsRepository) {}

  async getWordById(wordId: string): Promise<Word> {
    return this.wordsRepository.findOne({ wordId });
  }

  async getWords(): Promise<Word[]> {
    return this.wordsRepository.find({});
  }

  async createWord(dto: CreateWordDto): Promise<Word> {
    return this.wordsRepository.create({
      id: crypto.randomUUID(),
      value: dto.value,
      sentences: dto.sentences,
      meanings: dto.meanings,
    });
  }

  async updateWord(wordId: string, wordUpdates: UpdateWordDto): Promise<Word> {
    return this.wordsRepository.findOneAndUpdate({ wordId }, wordUpdates);
  }
}
