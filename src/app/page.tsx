import Link from "next/link";

export const PHOTOS = [
  { id: "1", title: "Photo 1", description: "This is the first photo" },
  { id: "2", title: "Photo 2", description: "This is the second photo" },
  { id: "3", title: "Photo 3", description: "This is the third photo" },
];

export default function Home() {
  return (
    <main className="p-10 bg-black min-h-screen">
      <h1 className="text-3xl font-black text-white mb-10 uppercase italic">
        The Gallery
      </h1>
      <div className="flex gap-4">
        {PHOTOS.map((pic) => {
          return (
            <Link key={pic.id} href={`/photo/${pic.id}`} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-white hover:border-blue-500 transition-all">
              {pic.title}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
