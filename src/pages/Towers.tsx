import { Link } from "react-router-dom";
import data from "../data/data.json";

const Towers = () => {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center !mb-5">
        Our Apartment Towers
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {data.map((tower) => (
          <Link key={tower.id} to={`/floors/${tower.name}`}>
            <div className="bg-white rounded-xl !p-5 shadow-lg cursor-pointer">
              <img
                src={tower.image}
                alt={tower.name}
                className="rounded-xl !mb-3"
              />
              <h2 className="text-xl font-semibold">{tower.name}</h2>
              <p>15 floors</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Towers;
