import fs from 'fs';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get('name');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const company = formData.get('company');
  const alreadyBought = formData.get('alreadyBought');
  const selectedOption = formData.get('selectedOption');
  const message = formData.get('message');
  const confirmedConsent = formData.get('confirmedConsent');

  const transport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === 'object' &&
      'arrayBuffer' in formDataEntryValue
    ) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());

      const mailOptions: Mail.Options = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Formulario de Duotono.es`,
        html: `<h4>Mensaje de: ${name} ${lastName}</h4></br></br><p>Email: ${email}</p></br></br><p>Teléfono: ${phone}</p></br></br><p>Empresa: ${company}</p></br></br><p>Ha comprado ya en la tienda? ${alreadyBought}</p></br></br><p>Tipo de producto que necesita: ${selectedOption}</p></br></br><p>${message}</p></br></br><p>Acepta las condiciones de uso y la política de privacidad: ${confirmedConsent}</p></br></br><p>${message}</p></br>`,
        attachments: [
          {
            filename: 'image.png',
            content: buffer,
          },
        ],
      };

      const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
          transport.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve('Email sent');
            } else {
              reject(err.message);
            }
          });
        });

      try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
      } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
      }
    }
  }
  return NextResponse.json({ success: true });
}
