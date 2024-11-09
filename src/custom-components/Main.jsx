import { Header } from "./Header";

export function Main({content}) {
    return (
        <main className="relative min-h-screen md:h-screen w-full flex justify-center items-end overflow-hidden">
            <Header />
            <div className="h-[90vh] w-[93%] flex flex-col justify-end overflow-hidden">
                {content}
            </div>
        </main>
    );
}