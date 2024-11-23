export interface CreateCheckOptions {
  topic?: string;
  style?: string;
  excludedWords?: string;
  prompt?: string;
  file?: Express.Multer.File;
  authorId: string;
}
