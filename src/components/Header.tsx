export default function Header() {
    return (<header className="flex w-full hor-flex justify-center items-center">
        <div className="content-container flex w-full hor-flex space-between items-center">
            <a
                className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-two"
                href="/"
                rel="noopener noreferrer"
            >
                <h2>Home</h2>
            </a>
            <a
                className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 link-item shadow-color-two"
                href="/about"
                rel="noopener noreferrer"
            >
                <h2>About</h2>
            </a>
        </div>
    </header>);
};