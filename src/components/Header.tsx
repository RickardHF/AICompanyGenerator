'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const { getSection, supportedLanguages } = require("@/messages/lang-support");

export default function Header() {

    const params = useSearchParams();
    const lang = params.get("lang") ?? "xx";

    const link_names = getSection(lang, 'links');

    const home_link = {
        pathname: "/",
        query: {}
    }

    const about_link = {
        pathname: "/about",
        query: {}
    }

    if (lang !== "xx") {
        home_link.query = { lang: lang }
        about_link.query = { lang: lang }
    }
    
    return (
    <header className="flex w-full ver-flex justify-center items-center">
        <div className="flex w-full hor-flex justify-end px-10">
            {
                supportedLanguages.map((language:string) => {
                    return (
                        <Link
                            className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one px-2 hover:underline" 
                            href={{query: {lang: language}}}
                            >
                                <h2
                                    className="px-2"
                                >{language}</h2>
                        </Link>
                    )
                })
            }
        </div>
        <div className="flex hor-flex justify-around w-1/2 items-center px-8 py-4 min-w-[300px] max-w-full">
            <Link 
                href={home_link}
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
                >
                <h2>{link_names("home")}</h2>
            </Link>

            <Link
                href={about_link}
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
            >
                <h2>{link_names("about")}</h2>
            </Link>
        </div>
    </header>
    );
};