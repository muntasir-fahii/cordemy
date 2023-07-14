const SectionTitle = ({ span, h2, p }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="felx  items-center flex-col text-center gap-2 overflow-hidden"
    >
      <span className="uppercase text-sm font-bold tracking-widest text-indigo-600">
        {span}
      </span>
      <h2 className=" text-3xl font-semibold mt-2">{h2}</h2>
      <p className="w-/5 mt-2 text-gray-600">{p}</p>
    </div>
  );
};

export default SectionTitle;
