type UserPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  return (
    <div className="p-4 bg-cyan-50-50 border-2 border-cyan-500 rounded-md">
      <h1 className="text-xl font-bold text-black">
        User Page
      </h1>
      <p className="text-sm text-zinc-500">
        User ID:
        {" "}
        {id}
      </p>
    </div>
  );
}
