import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/constants/project';
import Link from 'next/link';

export function Projects() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>Projects</h2>
        <div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {PROJECTS.map(({ id, name, description, stack, url }) => {
            return (
              <div key={id} className='flex flex-col items-start justify-start border rounded-lg p-3'>
                <div className=''>
                  <h3 className='text-base font-semibold'>
                    {url ? (
                      <div className='flex items-center justify-start gap-1'>
                        <Button variant='link' className='h-auto p-0' asChild>
                          <Link href={url} target='_blank' rel='noreferrer'>
                            {name}
                          </Link>
                        </Button>
                        <span className='size-1 rounded-full bg-green-500' />
                      </div>
                    ) : (
                      name
                    )}
                  </h3>
                  <p className='text-xs text-muted-foreground mt-1 font-mono'>{description}</p>
                </div>
                <div className='mt-auto'>
                  <div className='mt-2 flex flex-wrap gap-1'>
                    {stack.map((val, i) => {
                      return (
                        <div
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={i}
                          className='inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight'
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
