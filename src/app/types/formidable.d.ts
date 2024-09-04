// src/app/types/formidable.d.ts
declare module 'formidable' {
    import { IncomingMessage } from 'http';
  
    interface Fields {
      [key: string]: string | string[];
    }
  
    interface Files {
      [key: string]: any;
    }
  
    interface IncomingFormOptions {
      uploadDir?: string;
      keepExtensions?: boolean;
      maxFieldsSize?: number;
      maxFileSize?: number;
    }
  
    class IncomingForm {
      constructor(options?: IncomingFormOptions);
      uploadDir: string;
      keepExtensions: boolean;
      parse(req: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void): void;
    }
  
    export = IncomingForm;
  }
  