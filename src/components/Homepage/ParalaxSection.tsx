export default function ParalaxSection() {
  const backgroundImageUrl = "/images/paralax.png";

  return (
    <div
      className="h-[600px] bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    ></div>
  );
}
