import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

export type planetType = {
  name: "string";
  population: "string";
  terrain: "string";
};

const fetchPlanets = async (page: number) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);

  return res.json();
};

export default function Planets() {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    { keepPreviousData: true }
  );
  console.log(data?.next);

  return (
    <div>
      <h2>Planets</h2>
      {/* <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button> */}
      <span>Current Page: {page}</span>

      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>
      {status === "success" && (
        <button
          onClick={() => {
            if (!isPreviousData && data.next) {
              setPage((old) => old + 1);
            }
          }}
          disabled={!data?.next}
        >
          Next Page
        </button>
      )}

      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet: planetType) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}
