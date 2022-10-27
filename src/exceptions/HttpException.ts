export class HttpException extends Error {
  public status: number;
  public message: string;
  // public statuscode: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
    //this.statuscode = statuscode;
  }
}
