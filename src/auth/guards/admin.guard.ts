import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log(user, user.role);

    if (user && user.role === 'ADMIN') {
      return true;
    }

    throw new ForbiddenException(
      'Acesso negado. Esta rota é apenas para administradores.',
    );
  }
}
