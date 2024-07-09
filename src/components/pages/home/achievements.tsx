import { ACHIEVEMENTS } from '@/constants/achievements';

export function Achievements() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>Achievements</h2>
        <div className='space-y-3'>
          {ACHIEVEMENTS.map(({ id, title, description, date }) => {
            return (
              <div key={id}>
                <div className='flex items-end justify-between'>
                  <h3>{title}</h3>
                  <p className='text-sm text-muted-foreground tabular-nums'>{date}</p>
                </div>
                <p className='text-sm text-muted-foreground mt-2 font-mono font-medium'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
