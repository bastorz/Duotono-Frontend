import fs from 'fs';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { Dropbox } from 'dropbox';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function POST(req: Request, res: NextApiResponse) {
  const formData = await req.formData();
  const name = formData.get('name');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const images0 = formData.get(`images[0]`);
  const images1 = formData.get(`images[1]`);
  const images2 = formData.get(`images[2]`);
  const images3 = formData.get(`images[3]`);
  const images4 = formData.get(`images[4]`);
  const images5 = formData.get(`images[5]`);
  const images6 = formData.get(`images[6]`);
  const images7 = formData.get(`images[7]`);
  const images8 = formData.get(`images[8]`);
  const images9 = formData.get(`images[9]`);

  const imagesArray = [
    images0,
    images1,
    images2,
    images3,
    images4,
    images5,
    images6,
    images7,
    images8,
    images9,
  ];

  const images = imagesArray.filter((image) => image !== null);
  const files = images as Blob[];
  const bloby = new Blob(files, { type: files[0].type });
  const buffer = Buffer.from(await bloby.arrayBuffer());

  // Initialize Dropbox API
  const dropbox = new Dropbox({
    accessToken:
      'sl.Bp4AzjXiC0Z8msMxjdpS5WdoocuIjz7Fa-Ynpi2MrQadxFZpXdTmmxB9Jf-bccbEhco_AgSFwt15TcBA0BtjSBmzI3yT52F_qbcqD7FEsJwc7brKM0BSjCYBezUCpiOkwLe_XmiDfjn6cjgsonnNjfE',
  });

  // Create a folder in Dropbox
  const folderPath = `/${name + ' ' + lastName}`;
  await dropbox.filesCreateFolderV2({ path: folderPath });

  await dropbox.filesUpload({
    path: `${folderPath}/Datos-de-usuario.txt`,
    contents: `${name}\n${lastName}\n${email}\n${phone}\n${message}`,
  });

  await dropbox.filesUpload({
    path: `${folderPath}/imagen.jpg`,
    contents: buffer,
  });

  return NextResponse.json({ success: true });
}
