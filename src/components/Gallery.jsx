import HornedBeast from "./HornedBeast";

export default function Gallery({ horns, handleShowModal, data }) {
  return (
    <div>
      <p>Number of Horns: {horns}</p>
      {data
        .filter((beast) => beast.horns == horns || horns == "")
        .map((beast) => (
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
