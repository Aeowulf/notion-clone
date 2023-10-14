'use client'

import Link from 'next/link'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from '@/lib/utils'

import { ModeToggle } from "@/components/ModeToggle"
import { Spinner } from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import { Logo } from "./Logo"

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  const scrolled = useScrollTop()

  return (
    <div className={cn(
      'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
      scrolled && 'border-b shadow-sm'
    )}>
      <Logo />

      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && (
          <Spinner />
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost' size='sm'>
                Log In
              </Button>
            </SignInButton>

            <SignInButton mode='modal'>
              <Button size='sm'>
                Get Wotion Free
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/documents'>
                Enter Wotion
              </Link>
            </Button>

            <UserButton
              afterSignOutUrl='/'
            />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  )
}