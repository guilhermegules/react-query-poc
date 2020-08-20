import React from "react";
import { useQuery } from "react-query";
import Planet from "../Planet";
import getPlanets from "../../services/planets-service";

const Planets = () => {
  const { data, status } = useQuery("planets", getPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>...Loading</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
