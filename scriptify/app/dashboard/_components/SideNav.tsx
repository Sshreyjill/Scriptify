'use client';

import React, { useEffect } from 'react' 
import { usePathname } from 'next/navigation' 
import Image from 'next/image'; 
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';  

function SideNav() {     
    const MenuList = [         
        {             
            name: 'Home',             
            icon: Home,             
            path: '/dashboard'         
        },         
        {             
            name: 'History',             
            icon: FileClock,             
            path: '/dashboard/history'         
        },         
        {             
            name: 'Billing',             
            icon: WalletCards,             
            path: '/dashboard/billing'         
        },         
        {             
            name: 'Settings',             
            icon: Settings,             
            path: '/dashboard/settings'         
        },     
    ];     

    const path = usePathname(); 

    useEffect(() => {         
        console.log(path);     
    }, [path]);  // Correct dependency array 

    return (         
        <div className='h-screen p-5 shadow-sm border' style={{ fontFamily: 'cursive' }}>             
            <div className='flex justify-center'>                 
                <Image src={'/logo.svg'} alt='logo' width={160} height={120} />             
            </div>              

            <div className='mt-10'>                 
                {MenuList.map((menu, index) => (                     
                    <div                         
                        key={index} // Add the key prop here                         
                        className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                            path === menu.path ? 'bg-primary text-white' : ''
                        }`} 
                    >                         
                        <menu.icon />                         
                        <h2>{menu.name}</h2>                     
                    </div>                 
                ))}             
            </div>         
        </div>     
    ); 
}  

export default SideNav;
