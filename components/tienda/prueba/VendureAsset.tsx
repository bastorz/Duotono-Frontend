import * as React from 'react';
import Image from "next/image"

interface VendureAssetProps {
  preview: string;
  preset: 'tiny' | 'thumb' | 'small' | 'medium' | 'large';
  alt: string;
}

export function VendureAsset({ preview, preset, alt }: VendureAssetProps) {
  return (
    <Image src={preview} alt={''} width={150} height={150} className='rounded-xl'></Image>
  );
}
