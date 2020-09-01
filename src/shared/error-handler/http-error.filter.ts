import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common'

@Catch()
export class HttpErrorFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = (exception instanceof HttpException) ? exception.getStatus() : null;

        const errorResponse = {
            statusCode: status,
            message: {
                messageError: `${exception.message}` || null,
                validator: (exception instanceof HttpException) ? `${JSON.stringify(exception.getResponse())}` : null
            },
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method
        }

        Logger.error(`
            ${request.method} ${request.url}`,
            JSON.stringify(errorResponse),
            'ExceptionFilter')

        response
            .json(errorResponse)
    }
}