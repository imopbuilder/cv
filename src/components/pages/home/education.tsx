import { EDUCATION } from '@/constants/education';

export function Education() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>Education</h2>
        <div className='space-y-3'>
          {EDUCATION.map(({ id, college, branch, duration }) => {
            return (
              <div key={id}>
                <div className='flex items-end justify-between'>
                  <h3>{college}</h3>
                  <p className='text-sm text-muted-foreground tabular-nums'>{duration}</p>
                </div>
                <p className='text-sm text-muted-foreground mt-2 font-mono font-medium'>{branch}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
