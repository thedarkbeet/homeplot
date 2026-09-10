import { notFound } from "next/navigation";

import { PHOTOS } from "@/app/page";

import { CloseButton } from "./close-button";

type PhotoModalProps = {
  params: Promise<{ id: string }>;
};

export default async function PhotoModal({ params }: PhotoModalProps) {
  const { id } = await params;

  const pic = PHOTOS.find(pic => pic.id === id);

  if (!pic) {
    notFound();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <div className="bg-zinc-950 p-12 rounded-4xl border border-zinc-800 max-w-lg w-full shadow-2xl">
        <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
          Intercepted Image
        </span>
        <h2 className="text-5xl font-black text-white uppercase italic mb-6">
          {pic.title}
        </h2>
        <p className="text-zinc-500 mb-8">
          This contant was intercepted. You seeing this in the modal window, but url is /photo/
          {id}
          {pic.description}
        </p>
        <CloseButton />
      </div>
    </div>
  );
}
