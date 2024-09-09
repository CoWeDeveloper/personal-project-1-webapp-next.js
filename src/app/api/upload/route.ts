import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Ensure the upload directory exists
const uploadDir = path.join(process.cwd(), 'public/assets/upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: Request) {
  try {
    // Convert Request to FormData
    const formData = await req.formData();
    const file = formData.get('image') as File; // Use File instead of Blob

    if (file) {
      // Get file name and create file path
      const filePath = path.join(uploadDir, file.name);

      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      // Save the file
      fs.writeFileSync(filePath, buffer);

      // Return the URL to the uploaded file
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
