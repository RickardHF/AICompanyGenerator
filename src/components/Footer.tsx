
export default function Footer() {
    return (
        <footer className="flex w-full hor-flex items-center justify-center">
            <div className="content-container flex w-full hor-flex items-center space-between">
                <a
                    className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-one"
                    href="https://github.com/RickardHF"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{' '}
                    <h2>@RickardHF</h2>
                </a>
                <a
                    className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-one"
                    href="https://www.linkedin.com/in/rickard-hole-falck-5b817713b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>LinkedIn</h2>
                </a>
            </div>
        </footer>
    );
}
