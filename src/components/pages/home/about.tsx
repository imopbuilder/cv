import { ABOUT } from '@/constants/about';

export function About() {
  return (
    <section>
      <div className='max-w-2xl mx-auto'>
        <h2>About</h2>
        <div>
          <p className='font-mono text-sm text-muted-foreground text-justify'>{ABOUT}</p>
        </div>
      </div>
    </section>
  );
}
