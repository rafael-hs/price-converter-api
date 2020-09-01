import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, call$: CallHandler<any>): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const url = request.url;
        const dateNow = Date.now();

        return call$.handle().pipe(
            tap(() => Logger.log(`
                ${method} ${url} ${Date.now() - dateNow}ms`,
                context.getClass().name
            ))
        );
    }

}