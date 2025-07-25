import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
    subsets: ['latin'] ,
    weight: ['400', '700']
});

export const bebas_neue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
});
