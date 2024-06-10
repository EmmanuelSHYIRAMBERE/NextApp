import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const username = session ? session.user!.name?.split(" ")[0] : "";

  return (
    <main>
      <h1>
        Hello <span> {username}</span>
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
