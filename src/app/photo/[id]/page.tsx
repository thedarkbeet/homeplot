import { notFound } from "next/navigation";

import { PHOTOS } from "@/app/page";

type PhotoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const pic = PHOTOS.find(pic => pic.id === id);

  if (!pic) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-black uppercase italic">
        {pic.title}
      </h1>
      <p className="mt-4 text-zinc-500">
        {pic.id}
      </p>
    </main>
  );
}
