import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import { FaArrowLeft } from "react-icons/fa";

const ApartmentDetails = () => {
  const { towerId, floorId, apartmentId } = useParams();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(`/floors/${towerId}/apartments/${floorId}`);
  };
  const tower = data.find((tower) => tower.name === towerId);

  const firstFloor = tower?.floors[0];

  if (!firstFloor) {
    return <div className="p-6 text-red-500">No apartment data found.</div>;
  }

  const simulatedApartments = firstFloor.apartments.map((apt) => ({
    ...apt,
    id: `${apt.id}`,
  }));

  const apartment = simulatedApartments.find((apt) => apt.id === apartmentId);

  return (
    <div className="bg-white !p-5 rounded-lg">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 flex-wrap font-medium !mb-5 cursor-pointer"
      >
        <span className="bg-[#f7f8ff] rounded-full !p-3 text-sm">
          <FaArrowLeft />
        </span>
        Back to {floorId}
      </button>

      <div className="flex flex-wrap gap-5">
        <img
          src={apartment?.floorPlan}
          alt={apartment?.name}
          width={500}
          height={500}
          className="bg-[#f7f8ff] !p-4 rounded-lg object-fit-contain"
        />
        <div>
          <h3>
            <strong>Apartment Name:</strong> {apartment?.name}
          </h3>
          <p>
            <strong>Square feet:</strong> {apartment?.area}
          </p>
          <p>
            <strong>Apartment Type:</strong> {apartment?.unitType}
          </p>
          <p>
            <strong>No. of Rooms:</strong> {apartment?.roomCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
