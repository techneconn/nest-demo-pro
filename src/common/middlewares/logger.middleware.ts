import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Logger run')
    next()
  }
}
