/* Abstract class for a custom error object. All error objects extend this class */
export abstract class CustomError extends Error {
    abstract statusCode: number;
  
    constructor(message: string) {
      super(message);
  
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  
    abstract serializeErrors(): { message: string; field?: string }[];
}
  