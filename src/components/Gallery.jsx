import HornedBeast from "./HornedBeast";

export default function Gallery({ horns, handleShowModal, data }) {
  const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );

  return (
    <div className="container">
      {filteredHorns.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.imageUrl}
          description={beast.description}
          handleShowModal={handleShowModal}
        />
      ))}
    </div>
  );
}
