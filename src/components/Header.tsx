import { useTranslations } from "next-intl";

export default function Header() {

    const link_names = useTranslations('links');
    
    return (<header className="flex w-full hor-flex justify-center items-center">
        <div className="content-container flex w-full hor-flex space-between items-center">
            <a
                className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-one"
                href="/"
                rel="noopener noreferrer"
            >
                <h2>{link_names("home")}</h2>
            </a>
            <a
                className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-one"
                href="/about"
                rel="noopener noreferrer"
            >
                <h2>{link_names("about")}</h2>
            </a>
        </div>
    </header>);
};