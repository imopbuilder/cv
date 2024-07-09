'use client';

import { Button } from '@/components/ui/button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { INTRO } from '@/constants/intro';
import { CommandIcon, Moon, ReceiptText, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export function ResumeCommandMenu() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <React.Fragment>
      <p className='fixed bottom-0 inset-x-0 border-t border-t-muted bg-background p-1 text-center text-sm text-muted-foreground print:hidden hidden xl:block'>
        Press{' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>{' '}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant='outline'
        size='icon'
        className='fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden'
      >
        <CommandIcon className='my-6 size-4 text-muted-foreground' />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Actions'>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                setTimeout(() => window.print(), 300);
              }}
            >
              <ReceiptText className='mr-2 h-4 w-4' />
              <span className='capitalize'>Print</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setOpen(false);
              }}
            >
              {theme === 'dark' ? <Sun className='mr-2 h-4 w-4' /> : <Moon className='mr-2 h-4 w-4' />}
              <span className='capitalize'>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Social'>
            {[...INTRO.personalLinks, ...INTRO.socialLinks].map(({ href, icon: Icon, label }) => {
              return (
                <CommandItem
                  key={href}
                  onSelect={() => {
                    setOpen(false);
                    window.open(href, '_blank');
                  }}
                >
                  <Icon className='mr-2 h-4 w-4' />
                  <span className='capitalize'>{label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  );
}
