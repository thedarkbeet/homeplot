import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="space-y-6">
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Login</button>
        <p className="text-sm text-zinc-500">
          Don't have an account?
          {" "}
          <Link href="/register" className="text-blue-500 hover:text-blue-600">Register</Link>
        </p>
      </form>
    </main>
  );
}
