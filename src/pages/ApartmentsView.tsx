import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ApartmentsView = () => {
  const { towerId, floorId } = useParams();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(`/floors/${towerId}`);
  };

  const tower = data.find((t) => t.name === towerId);

  const firstFloor = tower?.floors[0];

  const simulatedFloor = {
    ...firstFloor,
    id: floorId,
    apartments: firstFloor?.apartments.map((apt) => ({
      ...apt,
      id: `${apt.id}`,
    })),
  };

  return (
    <section className="bg-white rounded-lg !p-5">
      <button
        className="flex items-center gap-1 flex-wrap font-medium !mb-5 cursor-pointer"
        onClick={handleBack}
      >
        <span className="bg-[#f7f8ff] rounded-full !p-3 text-sm">
          <FaArrowLeft />
        </span>
        Back
      </button>

      <h1 className="text-2xl font-semibold !mb-5">
        Tower {towerId} - Floor {floorId} Apartments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {simulatedFloor?.apartments?.map((units) => (
          <Link
            key={units.id}
            to={`/floors/${towerId}/apartments/${floorId}/apartments/${units.id}`}
          >
            <motion.div
              key={units.id}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#f7f8ff] rounded-lg !p-3 flex flex-col gap-3 cursor-pointer hover:bg-[#cdd5e7]"
              onClick={() =>
                navigate(
                  `/tower/${towerId}/floor/${floorId}/apartment/${units.id}`
                )
              }
            >
              {/* <div className="h-32 w-full bg-gray-300 mb-3" /> */}

              <img
                src={units.thumbnail}
                alt={units.name}
                width={320}
                height={200}
                className="min-h-[200px] max-h-[200px] object-fit-cover w-full rounded-lg"
              />

              <p className="capitalize font-semibold">
                {units.unitType} Apartment
              </p>
              <p>{units.area}</p>
              <p>{units.roomCount} Rooms</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ApartmentsView;
