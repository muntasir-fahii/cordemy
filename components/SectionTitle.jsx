const SectionTitle = ({ span, h2, p }) => {
  return (
    <div className="felx  items-center flex-col text-center gap-2">
      <span className="uppercase text-sm font-bold tracking-widest text-indigo-600">
        {span}
      </span>
      <h2 className=" text-3xl font-semibold mt-2">{h2}</h2>
      <p className="w-/5 mt-2 text-gray-600">{p}</p>
    </div>
  );
};

export default SectionTitle;
