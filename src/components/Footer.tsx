
export default function Footer() {
    return (
        <footer className="flex w-full hor-flex items-center justify-center">
            <div className="content-container flex w-full hor-flex items-center justify-center ">
                <a
                    className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-4 link-item shadow-color-one"
                    href="https://github.com/RickardHF"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/icons/github-mark.svg" alt="By" className="w-8 h-8" />
                </a>
                <a
                    className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-4 link-item shadow-color-one align-center justify-center items-center"
                    href="https://www.linkedin.com/in/rickard-hole-falck-5b817713b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/icons/linkedin-icon.svg" alt="LI" className="w-8 h-8" />
                </a>
            </div>
        </footer>
    );
}
