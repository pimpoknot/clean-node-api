import { HttpResponse, httpRequest } from '../protocols/http'
import { MissinParamError } from '../erros/missin-param-error'
export class SignUpController {
  handle (httpRequest: httpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissinParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissinParamError('email')
      }
    }
  }
}
