import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import { FaArrowLeft } from "react-icons/fa";

const FloorView = () => {
  const { id } = useParams();

  const floor = data.find((floor) => floor.name === id);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  if (!floor) {
    return <div className="p-6 text-red-500">Tower not found.</div>;
  }

  const generatedFloors = Array.from({ length: 15 }, (_, i) => ({
    ...floor.floors[0],
    id: `A${i + 1}`,
    nameNo: i + 1,
  }));

  return (
    <div className="bg-white !p-5 rounded-lg">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 flex-wrap font-medium !mb-5"
      >
        <span className="bg-[#f7f8ff] rounded-full !p-3 text-sm">
          <FaArrowLeft />
        </span>
        Back
      </button>

      <h1 className="text-2xl font-semibold !mb-5">{floor?.name} Floors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {generatedFloors.map((steps) => (
          <Link
            key={steps.id}
            to={`/floors/${floor.name}/apartments/${steps.id}`}
          >
            {" "}
            <div className="bg-[#f1f1f1] rounded !p-3 hover:bg-[#cdd5e7] cursor-pointer">
              <h1 className="text-center font-medium text-xl">
                {steps.nameNo}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FloorView;
