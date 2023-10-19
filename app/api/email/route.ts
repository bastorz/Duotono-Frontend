import fs from "fs";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { NextResponse } from "next/server";

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

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());

      const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Formulario de Duotono.es`,
        html: `<h1>Mensaje de: ${name}</h1></br><p>${lastName}</p></br>${email}</br></br>${phone}</br></br>${company}</br></br>${alreadyBought}</br></br>${selectedOption}</br></br>${message}</br>`,
        attachments: [
          {
            filename: "image.png",
            content: buffer
          }
        ]
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
