import { NextResponse } from 'next/server';
import { FormData } from 'form-data';
import fs from 'fs';
import path from 'path';

// Ensure the upload directory exists
const uploadDir = path.join(process.cwd(), 'public/assets/upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as Blob;

    if (file) {
      const filePath = path.join(uploadDir, file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, buffer);

      const fileURL = `/assets/upload/${file.name}`;
      return NextResponse.json({ imageURL: fileURL });
    } else {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
  } catch (err: any) {
    console.error('Error handling file upload:', err);
    return NextResponse.json({ error: `Failed to upload image: ${err.message}` }, { status: 500 });
  }
}
