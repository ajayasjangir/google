import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }) {

  return (
    <div className="sm:pb-24 pb-40   mt-4">
      <div className="flex flex-wrap
      //  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
       px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8 ">
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-48 group-hover:shadow-xl w-full rounded-[10px] object-contain transition-shadow"
                />
              </Link>
           
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-[12px] text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
              <Link href={result.image.contextLink}>
              <h2 className="group-hover:underline truncate text-[12px]">
  {result.title.split(' ').slice(0, 5).join(' ')}...
</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
