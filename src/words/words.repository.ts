import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Word, WordDocument } from './schemas/word.schema';

@Injectable()
export class WordsRepository {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async findOne(userFilterQuery: FilterQuery<Word>): Promise<Word> {
    const word = await this.wordModel.findOne(userFilterQuery);
    if (!word) {
      throw new NotFoundException();
    }
    return word;
  }

  async find(usersFilterQuery: FilterQuery<Word>): Promise<Word[]> {
    return this.wordModel.find(usersFilterQuery);
  }

  async create(user: Word): Promise<Word> {
    const newWord = new this.wordModel(user);
    return newWord.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<Word>,
    user: Partial<Word>,
  ): Promise<Word> {
    const word = await this.wordModel.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
    if (!word) {
      throw new NotFoundException();
    }
    return word;
  }
}
