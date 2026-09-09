export default function RegisterPage() {
  return (
    <main className="space-y-6">
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </form>
    </main>
  );
}
