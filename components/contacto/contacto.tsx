"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import CustomFileSelector from "./utils/custom-file-selector";
import ImagePreview from "./utils/image-preview";

const options = ['Papelería y oficina', 'Publicidad y exterior', 'Ropa y accesorios', 'Decoración y regalos', 'Empaques y presentación', 'Grandes formatos']

const FileUploadForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [alreadyBought, setAlreadyBought] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);

  const handleAlreadyBoughtChange = (value: string) => {
    setAlreadyBought(value);
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };
  
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
    images.forEach((image, i) => {
      formData.append(image.name, image);
    });
    formData.append("name", name)
    formData.append("lastName", lastName)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("company", company)
    formData.append("alreadyBought", alreadyBought)
    formData.append("selectedOption", selectedOption)
    formData.append("message", message)
    setUploading(true);
    await axios.post("/api/email", formData);
    setUploading(false);
  };
  return (

  <div className="grid grid-cols-1 xl:grid-cols-2 px-6 xl:px-36 pt-20 pb-4">
      <div className="flex flex-col space-y-2 items-center justify-center xl:items-start xl:justify-start">
        <h4 className="font-semibold uppercase tracking-widest text-center xl:text-start">Contáctanos</h4>
        <h5 className="font-bold text-3xl text-center xl:text-start">Ponte en contacto hoy</h5>
        <p className="max-w-[24rem] text-center xl:text-start">Descubre más sobre nuestros servicios y cómo podemos impulsar tu proyecto. Nuestro equipo está listo para asesorarte y ayudarte.</p>
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left space-y-4 pb-8">
          <div className="flex space-x-4 pt-4">
            <Mail />
            <p className=" text-center xl:text-start">administracion@duotonodesign.com</p>
          </div>
          <div className="flex space-x-4">
            <Phone />
            <p className=" text-center xl:text-start">+ 34 9220 2403 3</p>
          </div>
          <div className="flex space-x-4">
            <MapPin />
            <p className="max-w-[10rem] text-center xl:text-start">Calle la Carreta 20, 38400 Santa Cruz de Tenerife</p>
          </div>
        </div>
      </div>

      <form className="bg-first w-full xl:max-w-[38rem] p-10 rounded-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
        <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Nombre</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Manuel"
              className="w-full xl:max-w-[40rem] p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Apellido</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Afonso"
              className="w-full xl:max-w-[40rem] p-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 xl:space-y-0">
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
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Phone</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="633 333 333"
              className="w-full xl:max-w-[18rem] p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Empresa</label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Duotono"
              className="xl:max-w-[18rem] p-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 xl:space-y-0">
          <label className="font-bold">¿Has comprado ya el producto en nuestro sitio web?</label>
          <div className="flex space-x-4">
            <label className="flex space-x-10">
              Si
              <input
                type="checkbox"
                checked={alreadyBought === "Si"}
                onChange={() => handleAlreadyBoughtChange("Si")}
                className="ml-2"
              />
            </label>
            <label className="flex space-x-10">
              No
              <input
                type="checkbox"
                checked={alreadyBought === "No"}
                onChange={() => handleAlreadyBoughtChange("No")}
                className="ml-2"
              />
            </label>
          </div>
        </div>
  
        <div className="flex flex-col space-y-4 xl:space-y-0">
          <label className="font-bold">Selecciona el tipo de producto que necesitas</label>
          <select value={selectedOption} onChange={handleSelectChange} className="p-2 rounded-xl">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-4 xl:space-y-0">
          <label className="font-bold">Mensaje</label>
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="px-4 py-4 pb-10 rounded-xl"
          ></textarea>
        </div>
        <div className="flex flex-col space-y-4 xl:space-y-0">
            <span className="font-bold">Subir archivos (Opcional)</span>
            <CustomFileSelector
              accept="image/png, image/jpeg"
              onChange={handleFileSelected}
            />
            <ImagePreview images={images} />
        </div>
          <Button
            type="submit"
            variant="default"
            className={classNames({
              "text-white bg-black hover:bg-black/90 duration-200 transition":
                true,
              "disabled pointer-events-none opacity-90": uploading,
            })}
            disabled={uploading}
          >
            Enviar
          </Button>
        </div>
      </form>
  </div>
  );
};

export default FileUploadForm;
