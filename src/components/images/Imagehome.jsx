import destkop from "../../assets/ubuntunew.svg";
function Imagehome() {
  return (
    <>
      <div
        className="object-cover bg-cover"
        style={{
          width: "890px",
          height: "350px",
          backgroundImage: `url(${destkop})`,
        }}
      ></div>
    </>
  );
}
export default Imagehome;
