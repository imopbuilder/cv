import { Button } from '@/components/ui/button';
import { RESUME } from '@/constants/app';
import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
  return (
    <section>
      <div className='max-w-2xl mx-auto flex items-start justify-between gap-5'>
        <div>
          <h2 className='text-2xl font-bold'>{RESUME.intro.name}</h2>
          <p className='text-muted-foreground text-sm max-w-md pt-3'>{RESUME.intro.description}</p>
          <p>
            <span className='grayscale text-xs inline-block pr-1'>🌐</span>
            <Button className='px-0 text-muted-foreground text-xs pt-2 pb-3' variant='link' asChild>
              <Link href={RESUME.intro.location.href} target='_blank' rel='noreferrer'>
                {RESUME.intro.location.value}
              </Link>
            </Button>
          </p>
          <div className='flex items-start justify-start gap-2'>
            {RESUME.intro.socialLinks.map((link) => (
              <Button key={link.label} className='text-muted-foreground h-8 w-8' variant='outline' size='icon' asChild>
                <Link href={link.href} target='_blank' rel='noreferrer'>
                  {<link.icon size={16} />}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className='relative'>
          <div className='absolute -inset-0.5 rounded-[10px] bg-gradient-to-br from-violet-500 to-fuchsia-500 -z-10' />
          <Image
            src={`/resume/${RESUME.intro.profilePic.src}`}
            className='rounded-lg w-32 h-auto border-2 border-background'
            width={100}
            height={100}
            alt={RESUME.intro.profilePic.alt}
            loading='lazy'
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
