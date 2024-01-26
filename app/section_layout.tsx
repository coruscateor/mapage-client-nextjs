

export default function SectionLayout({ children }: {
    children: React.ReactNode })
{

    return (
        <div className="flex text-gray-900 flex-col items-center flex-col w-3/4"> {/* Level 1 */}
            <div className="flex m-8 font-bold text-3xl w-full content-center">Namespace-wide queries and key selection</div> {/* Section Title */}
            <div className="flex flex-col w-full">
                {children}
            </div>
        </div>

    )

}
