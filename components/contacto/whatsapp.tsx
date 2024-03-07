'use client';

import Image from 'next/image';

const Whatsapp = () => {
  const phoneNumber = '922024033';
  const message =
    '¡Resuelve tus dudas sobre tus diseños en Duotono Design directamente a través de Whatsapp!';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative z-50">
      <button className="fixed bottom-2 right-2" onClick={handleClick}>
        <Image
          src="/whatsapp.png"
          alt={''}
          width={50}
          height={50}
          className="rounded-full bg-white"
        />
      </button>
    </div>
  );
};

export default Whatsapp;
