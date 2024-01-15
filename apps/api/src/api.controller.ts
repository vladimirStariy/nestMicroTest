import { Controller, Get, Inject } from '@nestjs/common';
import { ApiService } from './api.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    @Inject('AUTH_SERVICE') private authService: ClientProxy
  ) {}

  @Get()
  async getUser() {
    return this.authService.send({
      cmd: 'get-user'
    }, {})
  }
}
