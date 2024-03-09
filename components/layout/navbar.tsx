'use client';

import Link from 'next/link';
import { ShoppingCart, Tally3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import DropdownMenu from './dropdown-menu';
import { cn } from '@/lib/utils';
import { OrderData, OrderPartial } from '@/lib/type';
import { useQuery } from '@/lib/use-query';
import { GET_ACTIVE_ORDER } from '@/lib/document';

const Navbar = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderPartial>();
  const [activeOrderLenght, setActiveOrderLenght] = useState<number>(0);
  const {
    data: orderData,
    loading,
    error,
  } = useQuery<OrderData>(GET_ACTIVE_ORDER);

  if (orderData?.activeOrder && !activeOrder) {
    setActiveOrder(orderData.activeOrder as any);
    setActiveOrderLenght(orderData?.activeOrder.lines.length);
  }

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className={clsx(
          'block cursor-pointer',
          screenWidth >= 1025 && 'hidden'
        )}
        onClick={toggleNav}
      >
        <div className="flex items-center justify-between px-4 md:px-[40px] lg:px-10 py-4">
          <Link href="/" className="flex gap-x-2">
            <Image
              src="/logo_nuevo.png"
              alt="Duotono Logo"
              width={200}
              height={200}
              className="pt-2"
            />
          </Link>
          <Tally3 className="rotate-90 mt-2" width={40} height={40} />
        </div>
      </div>

      {toggleMenu && screenWidth < 1025 && (
        <div className="flex flex-col space-y-5 pt-2 pb-10 px-8">
          <Link
            href="/tienda"
            className={cn(
              pathname === '/servicios-de-diseno'
                ? 'text-black font-bold'
                : 'text-black/80 font-bold'
            )}
          >
            Tienda
          </Link>
          <Link
            href="/servicios-de-diseno"
            className={cn(
              pathname === '/servicios-de-diseno'
                ? 'text-black font-bold'
                : 'text-black/80 font-bold'
            )}
          >
            Nuestros servicios
          </Link>
          <Link
            href="/quienes-somos"
            className={cn(
              pathname === '/quienes-somos'
                ? 'text-black font-bold'
                : 'text-black/80 font-bold'
            )}
          >
            Quienes somos
          </Link>
          <Link
            href="/contacto"
            className={cn(
              pathname === '/quienes-somos'
                ? 'text-black font-bold'
                : 'text-black/80 font-bold'
            )}
          >
            Te ayudamos
          </Link>
          <Link href="/tienda/resumen-de-compra">
            <Button
              variant="default"
              className="bg-second rounded-lg space-x-2 w-[16rem] md:w-[20rem] items-center justify-start"
            >
              <ShoppingCart fill="white" size={20} color="white" />
              <span className="text-white">{activeOrderLenght}</span>
            </Button>
          </Link>
        </div>
      )}

      {screenWidth > 1025 && (
        <nav className="flex items-center justify-evenly py-2">
          <div className="relative flex h-16 items-center">
            <Link href="/" className="flex gap-x-2">
              <Image
                src="/logo_nuevo.png"
                alt="Duotono Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="mx-6 flex items-center space-x-4 lg:space-x-12">
            <DropdownMenu />
            <Link
              href="/servicios-de-diseno"
              className={cn(
                pathname === '/servicios-de-diseno'
                  ? 'text-black'
                  : 'text-black/80'
              )}
            >
              Nuestros servicios
            </Link>
            <Link
              href="/quienes-somos"
              className={cn(
                pathname === '/quienes-somos' ? 'text-black' : 'text-black/80'
              )}
            >
              Quienes somos
            </Link>
          </div>
          <div className="flex items-center gap-x-10">
            <Link href="/contacto">
              <Button variant="default" className="bg-first rounded-lg ">
                Te ayudamos
              </Button>
            </Link>
            <Link href="/tienda/resumen-de-compra">
              <Button
                variant="default"
                className="bg-second rounded-lg flex items-center space-x-2 "
              >
                <ShoppingCart fill="white" size={20} color="white" />
                <span className="text-white">{activeOrderLenght}</span>
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
