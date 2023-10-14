'use client'

import Link from 'next/link'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from "lucide-react"
import { SignInButton } from '@clerk/clerk-react'

import { Spinner } from '@/components/Spinner'
import { Button } from "@/components/ui/button"

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, & Plans. Unified.<br />Welcome to <br />
        <span className='underline'>Wotion</span>
      </h1>

      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Wotion is the connected workspace where <br />
        better, faster work happens.
      </h3>

      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Wotion
            <ArrowRight className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Wotion Free
            <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}