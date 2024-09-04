import Image from "next/image";
import React from "react";

export type Character = {
  name: string;
  status: string;
  species: string;
  type: string;
  id: number;
  image: string;
};

function Characters({ characters }: { characters: Character[] }) {
  return (
    <div className="py-10">
      <div className="container">
        {/* charachter cats */}

        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {characters.map((character: Character) => (
            <div
              key={character.id}
              className="flex gap-5 bg-elevated1 p-2 rounded-xl">
              <div className="w-[100px]">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={character.image}
                  alt={character.name}
                  className="rounded-xl h-full w-[100px]"
                />
              </div>
              <div className="flex flex-col justify-center ">
                <h1 className="text-content-primary font-bold">
                  {character.name}
                </h1>
                <p className="text-content-secondary text-sm ">
                  {character.species}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;

//   name: 'Artist Morty',
//   status: 'Alive',
//   species: 'Human',
//   type: '',
//   gender: 'Male',
//   origin: [Object],
//   location: [Object],
//   image: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
//   episode: [Array],
//   url: 'https://rickandmortyapi.com/api/character/27',
//   created: '2017-11-05T08:59:07.457Z'
