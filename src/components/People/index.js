import React from "react";
import { useQuery } from "react-query";

import getPeople from "../../services/people-service";
import Person from "../Person";

const People = () => {
  const { data, status } = useQuery("people", getPeople);

  return (
    <div>
      <h2>People</h2>

      {status === "loading" && <div>...Loading</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
