import Image from 'next/image';

interface Props {
  icon: string;
  name: string;
}

const ModuleIcon = ({ icon, name }: Props) => {
  return (
    <div className='w-24 h-24 rounded-lg bg-transparent flex flex-col justify-center items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' objectFit='contain' src={icon} alt={name} />
      </div>
      <div className='mt-2 text-sm text-center'>{name}</div>
    </div>
  );
};

export default ModuleIcon;
