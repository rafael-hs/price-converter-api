import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './error-handler/http-error.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
    imports: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        }
    ],
    controllers: [
    ]
})
export class SharedModule { }
