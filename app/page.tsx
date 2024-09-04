import Characters from "@/components/Characters";
import FilterHandler from "@/components/FilterHandler";
import Header from "@/components/Header";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    status?: string;
    gender?: string;
  };
}) {
  const { gender: genderParams, status: statusParams } = searchParams;
  const gender = genderParams
    ? genderParams?.charAt(0)?.toUpperCase() + genderParams?.slice(1)
    : undefined;
  const status = statusParams
    ? statusParams?.charAt(0)?.toUpperCase() + statusParams?.slice(1)
    : undefined;

  const data = await fetch(
    `https://rickandmortyapi.com/api/character/?page=1&status=${
      status || "Alive"
    }&gender=${gender || "Male"}`
  );
  const characters = await data.json();

  return (
    <div>
      <Header />
      <FilterHandler />
      <Characters characters={characters.results} />
    </div>
  );
}
