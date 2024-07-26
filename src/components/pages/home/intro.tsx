import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { INTRO } from '@/constants/intro';
import Link from 'next/link';

export function Intro() {
  return (
    <section>
      <div className='max-w-2xl mx-auto flex items-start justify-between gap-5'>
        <div className='space-y-1.5 w-full'>
          <h1 className='text-2xl font-bold'>{INTRO.name}</h1>
          <p className='text-muted-foreground text-sm max-w-md font-mono'>{INTRO.description}</p>
          <p>
            <span className='grayscale text-sm inline-block pr-1'>🌐</span>
            <Button variant='link' className='h-auto p-0 text-muted-foreground' asChild>
              <Link href={INTRO.location.href} className='px-0 text-muted-foreground text-xs' target='_blank' rel='noreferrer'>
                {INTRO.location.value}
              </Link>
            </Button>
          </p>
          <div className='flex items-start justify-start gap-2 pt-1 print:hidden'>
            {[...INTRO.personalLinks, ...INTRO.socialLinks].map((link) => (
              <Button key={link.label} className='text-muted-foreground h-8 w-8' variant='outline' size='icon' asChild>
                <Link href={link.href} target='_blank' rel='noreferrer'>
                  {<link.icon className='h-4 w-4' />}
                </Link>
              </Button>
            ))}
          </div>
          <div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]'>
            {[...INTRO.personalLinks].map((link) => (
              <span key={link.label}>{link.value}</span>
            ))}
          </div>
        </div>
        <div className='relative w-full md:max-w-44 sm:max-w-32 max-w-28 overflow-hidden'>
          <Avatar className='rounded-none w-full h-auto'>
            <AvatarFallback className='aspect-square rounded-none font-semibold font-mono'>RP</AvatarFallback>
          </Avatar>
          {/* <Image
            src={`/resume/${INTRO.profilePic.src}`}
            className='rounded-none w-44 h-auto'
            width={100}
            height={100}
            alt={INTRO.profilePic.alt}
            loading='lazy'
            unoptimized
          /> */}
          <div className='absolute size-6 -right-3 -top-3 bg-background rotate-45 rounded-none' />
          <div className='absolute size-6 -bottom-3 -left-3 bg-background rotate-45 rounded-none' />
        </div>
      </div>
    </section>
  );
}
