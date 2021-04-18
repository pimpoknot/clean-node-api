import { HttpResponse, httpRequest } from '../protocols/http'
import { MissinParamError } from '../erros/missin-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: httpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissinParamError('email'))
    }
  }
}
