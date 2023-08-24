
import type { Metadata, ResolvingMetadata } from 'next'
const { getSection, configuration } = require("../lang-support");

export type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export function createMetadataGenerator(title_key: string, description_key: string, metadata_section_key: string = "metadata") 
    : (props: Props, parent?: ResolvingMetadata) => Promise<Metadata> {
    return async function generateMetadata(
        { params, searchParams }: Props, parent?: ResolvingMetadata
    ): Promise<Metadata> {

        let language = searchParams.lang;

        if (!language) {
            language = configuration.default;
        }

        const metadata_section = getSection(language, metadata_section_key);

        const metadata = {
            title: metadata_section(title_key),
            description: metadata_section(description_key)
        }

        return metadata;

    }
}