import { EXPERIENCE } from '@/constants/experience';

export function Experience() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>Experience</h2>
        <div className='space-y-3'>
          {EXPERIENCE.map(({ id, company, location, role, dateRange, description, technologies }) => {
            return (
              <div key={id}>
                <div className='flex items-end justify-between'>
                  <div className='inline-flex items-center justify-center gap-x-1'>
                    <h3>{company}</h3>
                    <div className='inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5'>
                      {location}
                      {/* <span className='inline-block absolute size-3 -top-1.5 -right-1.5 bg-background rotate-45' /> */}
                      {/* <span className='inline-block absolute size-3 -bottom-1.5 -left-1.5 bg-background rotate-45' /> */}
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground tabular-nums'>{dateRange}</p>
                </div>
                <p className='text-sm mt-1.5 font-mono font-medium'>{role}</p>
                <p className='text-xs/[16px] text-muted-foreground mt-2 font-mono font-medium'>
                  {description} Technologies: {technologies.join(', ')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
