import React from "react";
import Image from "next/image";

type Props = {
  images: File[];
};

const ImagePreview = ({ images }: Props) => {
  return (
    <div>
      <div className="my-10 p-4">
        {images.map((image) => {
          const src = URL.createObjectURL(image);
          return (
            <div className="relative aspect-video col-span-4 my-4" key={image.name}>
              <Image src={src} alt={image.name} className="object-cover rounded-xl" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;