import React from 'react'
import AIForm from '../components/AIForm'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="flex w-full justify-center border-b welcome-box">
          Welcome to &nbsp;
          <code className="font-mono font-bold">AI Company Generator</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/RickardHF"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <h2>RickardHF</h2>
          </a>
        </div>
      </div>

      <div className='flex w-full'>
        <AIForm></AIForm>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  )
}
