'use client'

import { useTranslationsFetcher, useLocalization } from "nextjs-static-page-localizer";
import { LocalizedLink } from "nextjs-static-page-localizer/components";
import LanguageMenu from "./LanguageMenu";

export default function Header() {

    const { configuration } = useLocalization();
    const tranlations = useTranslationsFetcher();
    const link_names = tranlations("links");

    return (
    <header className="flex w-full ver-flex justify-center items-center">
        <div className="flex w-full hor-flex justify-end px-10">
            <LanguageMenu />
        </div>
        <div className="flex hor-flex justify-around w-1/2 items-center px-8 py-4 min-w-[300px] max-w-full">
            <LocalizedLink 
                href="/"
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
                >
                <h2>{link_names ? link_names("home") : "Err"}</h2>
            </LocalizedLink>

            <LocalizedLink
                href="/about"
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
            >
                <h2>{link_names ? link_names("about") : "Err"}</h2>
            </LocalizedLink>
        </div>
    </header>
    );
};