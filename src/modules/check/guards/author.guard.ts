import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { ApiError } from '@modules/error/api-error.entity';
import { CheckService } from '../check.service';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(private readonly checkService: CheckService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const checkId = request.params.id;

    const check = await this.checkService.findById(checkId);

    if (!check) throw new ApiError(ApiErrorCode.EntityNotFound);
    if (check.authorId !== user.id) throw new ApiError(ApiErrorCode.NotAuthor);

    return true;
  }
}
