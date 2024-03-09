'use client';

import CustomFileSelector from '@/components/contacto/utils/custom-file-selector';
import ImagePreview from '@/components/contacto/utils/image-preview';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { BookCheck, Check, UserSquare } from 'lucide-react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { FormEvent, useEffect, useLayoutEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [confirmedConsent, setConfirmedConsent] = useState(false);

  const handleConfirmedConsent = () => {
    // Cambia el estado actual de confirmedConsent
    setConfirmedConsent((prevConfirmedConsent) => !prevConfirmedConsent);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('authToken') === null) {
      redirect('/');
    }
  }, []);

  const router = useRouter();

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      formData.append('name', name);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);
      formData.append('confirmedConsent', confirmedConsent.toString());
      images.forEach((image, i) => {
        formData.append(`image-[${i}]`, image);
      });
      formData.append('imageQuantity', images.length.toString());
      console.log('formData:', formData.toString());
      setUploading(true);
      await axios.post('/api/dropbox', formData);
      setUploading(false);
      toast.success('Documento enviado correctamente.');
      router.push('/tienda/checkout/compra-realizada');
    } catch (error) {
      toast.error('No se puede enviar el formulario.');
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-20">
      <div className="flex items-center justify-center">
        <span className="bg-first rounded-full">
          <Check className="w-12 h-12 p-2" />
        </span>
        <div className="h-[4px] bg-first w-48"></div>
        <span className="bg-first rounded-full">
          <UserSquare className="w-12 h-12 p-2" />
        </span>
        <div className="h-[4px] bg-slate-200 w-48"></div>
        <span className="bg-slate-200 rounded-full">
          <BookCheck className="w-12 h-12 p-2" />
        </span>
      </div>
      <form
        className="w-full xl:max-w-[38rem] rounded-xl border-x border-b shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2 px-10">
            <label className="font-bold">Nombre</label>
            <input
              type="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Manuel"
              className="xl:w-[32.5rem] p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2 px-10">
            <label className="font-bold">Apellidos</label>
            <input
              type="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Bellido"
              className="xl:w-[32.5rem] p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-4 xl:space-y-0 px-10">
            <label className="font-bold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juanmanuel@email.com"
              className="xl:w-[32.5rem] p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
            <div className="flex flex-col space-y-2 w-full px-10">
              <label className="font-bold">Teléfono</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="633 333 333"
                className="w-full p-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0 px-10">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-bold">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="p-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 xl:space-y-0 px-10">
            <span className="font-bold py-4">Subir archivos (Opcional)</span>
            <CustomFileSelector
              accept="image/png, image/jpeg"
              onChange={handleFileSelected}
            />
            <ImagePreview images={images} />
          </div>

          <div className="flex flex-col space-y-4 bg-first p-10">
            {/* Checkbox para confirmar */}
            <label htmlFor="confirmationCheckbox" className="font-semibold">
              Al subir tu archivo, estás dando tu aprobación para la producción
              del material tal como lo proporcionaste. es crucial que verifiques
              todos los detalles, incluyendo diseño, colores, tipografías y
              cualquier otro aspecto visual o de contenido, ya que cualquier
              error presente en el archivo proporcionado será responsabilidad
              del cliente.
            </label>
            <div className="flex space-x-2">
              <input
                type="checkbox"
                onChange={() => handleConfirmedConsent()}
                required
              />
              <p className="font-semibold">
                Marque la casilla para confirmar su consentimiento.
              </p>
            </div>
          </div>
          {/* <Link href="/tienda/checkout/compra-realizada"> */}
          <Button
            type="submit"
            className={cn({
              'bg-black px-12 w-full': true,
              'disabled pointer-events-none opacity-90': uploading,
            })}
            disabled={uploading || confirmedConsent !== true}
          >
            {uploading ? (
              <div className="h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full border-t-4 border-white h-4 w-4"></div>
              </div>
            ) : (
              <p className="text-white">Enviar</p>
            )}
          </Button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Page;
