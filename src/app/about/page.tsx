
import type { Metadata, ResolvingMetadata } from 'next'
import { createMetadataGenerator, Props } from '@/messages/helpers/metadata-generator'
import AboutContent from '@/components/AboutContent';

const metadata_function = createMetadataGenerator("about-title", "about-description")

export async function generateMetadata(
  { params, searchParams } : Props, parent?:ResolvingMetadata
) : Promise<Metadata> {
  return metadata_function({ params, searchParams }, parent);
}

export default function About() {
    return (
        <AboutContent></AboutContent>
    );
};