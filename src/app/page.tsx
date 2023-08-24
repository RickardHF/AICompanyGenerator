import React from 'react'
import AIForm from '@/components/AIForm'
import type { Metadata, ResolvingMetadata } from 'next'
import { createMetadataGenerator, Props } from '@/messages/helpers/metadata-generator'

const metadata_function = createMetadataGenerator("home-title", "home-description")

export async function generateMetadata(
  { params, searchParams } : Props, parent?:ResolvingMetadata
) : Promise<Metadata> {
  return metadata_function({ params, searchParams }, parent);
}

export default function Home() {

  return (
      <div className='flex w-full font-mono flex-col text-center'>
        <AIForm></AIForm>
      </div>
  )
}
