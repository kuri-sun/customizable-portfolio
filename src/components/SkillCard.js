export default function SkillCard({ img, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-11/12 overflow-hidden p-4 text-center justify-center bg-indigo-100 rounded-md flex flex-col h-48"
    >
      <img src={img} className="w-20 max-h-20 mx-auto" alt={name} />
      <div className="mt-2">
        <div className="font-bold md:text-xl text-dark-500">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}
