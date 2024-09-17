import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    const accept = req.headers['accept'];

    if (accept && accept.includes('application/json')) {
      return res.json({ message: 'Hello World!' });
    } else {
      return res.send('<h1>Hello World!</h1>');
    }
  }
}
