import foto from "../../assets/azrafpunya.svg";

function Imagecard() {
  return (
    <>
      <div
        className="object-cover bg-cover "
        style={{
          width: "240px",
          height: "320px",
          backgroundImage: `url(${foto})`,
        }}
      ></div>
    </>
  );
}
export default Imagecard;
