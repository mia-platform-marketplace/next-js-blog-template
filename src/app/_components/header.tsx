import { fetchCrudCollection } from "@/lib/api";
import Link from "next/link";

const Header = async() => {
  const homePage = await fetchCrudCollection({endpoint: 'home-page'})

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        {homePage[0].title}
      </Link>
      .
    </h2>
  );
};

export default Header;
