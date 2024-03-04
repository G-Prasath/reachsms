import Image from 'next/image'
import React, { useState, useRef } from 'react'
import profile_img from '../../public/reachlogo.png'


const Photoupload = () => {
    const [image,setImage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [common, setCommon] = useState(false)
    console.log(common);
    
    const handleImageclick = () => {
        inputRef.current?.click();      
    };

    const handleImageChange = (e:any) => {
        setImage(e.target.files[0].name)
        console.log(e.target.files[0].name);
    }
    return (
        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full overflow-hidden cursor-pointer p-3 bg-white bor relative' onClick={handleImageclick} onMouseEnter={() => setCommon(true)} onMouseLeave={() => setCommon(false)}>
            <div className={`w-[100px] h-[100px] bg-white opacity-[.5] ${common ? 'scale-1' : 'scale-0'} duration-300 absolute rounded-full`}></div>
            {image 
            ?(<Image src={`/${image}`} alt="Profile" width={100} height={100} className='object-fit' />)
            :(<Image src={profile_img} alt="Profile" className='object-fit' />)
            }
            <input type="file"  className='hidden' ref={inputRef} onChange={(e) => handleImageChange(e)} />
        </div>
    )
}

export default Photoupload