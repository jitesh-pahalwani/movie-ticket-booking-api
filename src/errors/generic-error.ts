import { CustomError } from './custom-error';

/* Error class for all generic errors in the application */
export class GenericError extends CustomError {
  statusCode = 500;
  reason = 'Cannot serve your request at the moment. Please try again later.';

  constructor() {
    super('Cannot serve your request at the moment. Please try again later.');

    Object.setPrototypeOf(this, GenericError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
