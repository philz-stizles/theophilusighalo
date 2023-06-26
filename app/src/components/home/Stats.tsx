import { stats } from '@/data/stats';
import { Container } from '../layout';
import { IconType } from 'react-icons';
import { Stat } from '@/types';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

const Stats = () => {
  return (
    <section className=" bg-zinc-900 py-16">
      <Container className=''>
        <div className="grid grid-cols-4 gap-3 ">
          {stats.map((item) => (
            <StatCard
              key={item.id}
              item={item}
              href={`/blogs/${item.id}`}
            ></StatCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

type StatCardProps = {
  item: Stat & { icon?: IconType };
  href: string;
};

const StatCard = ({
  item: { label, figure, icon: Icon },
  href,
}: StatCardProps) => {
  return (
    <div className=" text-white">
      <div className="flex items-center gap-3 mb-1">
        {Icon && <Icon size={24} />}
        <span className=" font-extrabold text-3xl">{figure}</span>
      </div>
      <div className="font text-lg uppercase font-medium">{label}</div>
    </div>
  );
};

export default Stats;
