'use client'

import { Language } from "nextjs-static-page-localizer/interfaces";
import { useTranslationsFetcher, useLocalization } from "nextjs-static-page-localizer";
import { LocalizedLink, LanguageSwitcher } from "nextjs-static-page-localizer/components";

export default function Header() {

    const { configuration } = useLocalization();
    const tranlations = useTranslationsFetcher();
    const link_names = tranlations("links");

    return (
    <header className="flex w-full ver-flex justify-center items-center">
        <div className="flex w-full hor-flex justify-end px-10">
            {
                configuration?.languages.map((language:Language) => {
                    return (
                        <LanguageSwitcher
                            key={language.code}
                            className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one px-2 hover:underline" 
                            lang={language.code}
                            >
                                <h2
                                    className="px-2"
                                >{language.name}</h2>
                        </LanguageSwitcher>
                    )
                })
            }
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