export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any, error: any) { console.error(msg, error); }
  warn(msg: any)  { console.warn(msg); }
}
