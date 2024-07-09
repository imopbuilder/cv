import { SKILLS } from '@/constants/skills';

export function Skills() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>Skills</h2>
        <div className='flex flex-wrap gap-1'>
          {SKILLS.map(({ id, title }) => {
            return (
              <span
                key={id}
                className='inline-flex relative overflow-hidden items-center px-3 py-1 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 print:text-[10px]'
              >
                {title}
                <span className='inline-block absolute size-3 -top-1.5 -right-1.5 bg-background rotate-45' />
                <span className='inline-block absolute size-3 -bottom-1.5 -left-1.5 bg-background rotate-45' />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
