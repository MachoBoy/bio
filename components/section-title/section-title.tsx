interface Props {
  number: string;
  title: string;
}
const SectionTitle = ({ number, title }: Props) => (
  <div className='flex flex-row 2xl:text-[170px] xl:text-[140px] lg:text-[110px] md:text-7xl xs:text-5xl xxs:text-3xl text-3xl text-gray-400 opacity-25'>
    <div>{number}</div>. <div className='ml-4'>{title}</div>
  </div>
);

export default SectionTitle;
