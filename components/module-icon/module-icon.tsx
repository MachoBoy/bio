import Image from 'next/image';

interface Props {
  icon: string;
  name: string;
}

const ModuleIcon = ({ icon, name }: Props) => {
  return (
    <div className='sm:w-[70px] sm:h-[70px] w-auto h-auto rounded-lg bg-transparent flex flex-col justify-center items-center'>
      <div className='relative lg:w-9 lg:h-9 xs:w-8 xs:h-8 xs:block hidden'>
        <Image layout='fill' objectFit='contain' src={icon} alt={name} />
      </div>
      <div className='mt-2 xs:text-sm text-xs text-center'>{name}</div>
    </div>
  );
};

export default ModuleIcon;
