import fs from 'fs';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { Dropbox } from 'dropbox';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function POST(req: Request, res: NextApiResponse) {
  // OAuth Dropbox API:
  // redirect(
  //   'https://www.dropbox.com/oauth2/authorize?client_id=vlpcttuzr64cg1e&redirect_uri=http://localhost:3000/api/dropbox&response_type=code&access_token_type=offline'
  // );

  const formData = await req.formData();
  console.log('formData:', formData);
  const name = formData.get('name');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const imageQuantity = formData.get('imageQuantity')?.toString();
  const imageQuantityInt = imageQuantity ? parseInt(imageQuantity, 10) : 1;

  const images = [];

  for (let i = 0; i < imageQuantityInt; i++) {
    // Obtener el nombre del campo de la imagen
    const imageName = `image-[${i}]`;
    // Obtener la imagen del FormData
    // const image = formData.get(imageName);
    const file: File | null = formData.get(imageName) as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Agregar la imagen al array
    images.push(buffer);
  }

  // Initialize Dropbox API
  const dropbox = new Dropbox({
    accessToken:
      'sl.Bw8Z8vm9WzwTNQ9HOTlxp1jogMQshasNrSY7wVaPtekmaKQhU1dUHOSd5JHcHJnLRKsovI45_BODTluUZyA5j8NqBiplzOUdpyKXAwNnx3ksBbOs-bRXTc3MBNC9qT7u_yRRg0x--irge-tBPJr2o4E',
  });

  // Create a folder in Dropbox
  const folderPath = `/${name + ' ' + lastName}`;
  await dropbox.filesCreateFolderV2({ path: folderPath });

  await dropbox.filesUpload({
    path: `${folderPath}/Datos-de-usuario.txt`,
    contents: `${name}\n${lastName}\n${email}\n${phone}\n${message}`,
  });

  for (let i = 0; i < images.length; i++) {
    // Subir la imagen a Dropbox
    await dropbox.filesUpload({
      path: `${folderPath}/imagen-${i}.jpg`,
      contents: images[i],
    });
  }

  return NextResponse.json({ success: true });
}
