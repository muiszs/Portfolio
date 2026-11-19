import Image from 'next/image';
import Muiz from '@/public/muiz.png'
import React from 'react'

const profilePic = () => {
  return (
    <Image src={Muiz} alt='Profile-Picture' className='w-full h-full object-cover' />
  )
}   

export default profilePic;