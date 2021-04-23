export class ServerError extends Error {
  constructor () {
    super('Tente novamente mais tarde')
    this.name = 'Server error'
  }
}
