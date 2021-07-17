function Cover({ subtitle, category, image }) {
  return (
    <div
      className={`h-[500px] w-[300px] relative ${image} bg-no-repeat bg-center bg-cover`}
    >
      <div className="bg-linear-gradient-2 absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-5 left-5 text-left">
        {/* subtitle */}
        <div>{subtitle}</div>
        <h3>{category}</h3>
      </div>
    </div>
  );
}

export default Cover;
