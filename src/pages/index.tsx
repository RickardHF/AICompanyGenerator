import AIForm from "@/components/AIForm";

export default function Home() {

    return (
        <div>
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 by-item"
                href="https://github.com/RickardHF"
                target="_blank"
                rel="noopener noreferrer"
            >
                By{' '}
                <h2>@RickardHF</h2>
            </a>

            <div className='flex w-full font-mono flex-col text-center'>
                <AIForm></AIForm>
            </div>

        </div>
    )
}