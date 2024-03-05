import Image from 'next/image'
import React, { useState, useRef } from 'react'
import profile_img from '../../public/reachlogo.png'
import { MdAddPhotoAlternate } from "react-icons/md";


const Photoupload = () => {
    const [image, setImage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [common, setCommon] = useState(false)

    const handleImageclick = () => {
        inputRef.current?.click();
    };

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0].name)
        console.log(e.target.files[0].name);
    }
    return (
        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full overflow-hidden p-3 cursor-pointer bg-white relative shadow-navShadow' onClick={handleImageclick} onMouseEnter={() => setCommon(true)} onMouseLeave={() => setCommon(false)}>
            <div className={`w-[100px] h-[100px] bg-black opacity-[.7] ${common ? 'scale-1' : 'scale-0'} duration-300 absolute rounded-full`}></div>
            <MdAddPhotoAlternate className={`absolute text-white font-bold duration-300 ${common ? 'scale-1' : 'scale-0'}`} fontSize={35} />
            {image
                ? (<Image src={`/${image}`} alt="Profile" width={100} height={100} className='object-fit absolute' />)
                : (<Image src={profile_img} alt="Profile" className='object-fit' />)
            }
            <input type="file" className='hidden' ref={inputRef} onChange={(e) => handleImageChange(e)} />
        </div>
    )
}

export default Photoupload