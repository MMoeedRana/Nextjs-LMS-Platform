import Image from 'next/image'

export const Logo = () => {
  return <Image priority alt="Logo" width={100} height={100} src="/images/Logo.png" className='justify-center items-center pl-8 pr-8 w-full h-full' />
}