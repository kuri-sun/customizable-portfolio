export default function CertCard(props) {
  const link = props.link;
  const img = props.img;
  const certName = props.certName;
  const issuedBy = props.issuedBy;
  const fromDate = props.fromDate;
  const toDate = props.toDate;

  return (
    <a href={link} rel="noreferrer" target="_blank">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className="hover:bg-indigo-200 w-full h-full bg-indigo-100 rounded-md py-4 px-4"
      >
        <img
          src={img}
          className="w-full h-56 mx-auto object-cover"
          alt={certName}
        ></img>
        <div className="mt-2">
          <h1 className="font- md:text-xl text-gray-600">{certName}</h1>
          <p className="font-light md:text-lg text-gray-600">
            Issued by {issuedBy}
          </p>
          {fromDate && toDate && (
            <p className="font-light text-gray-400">
              {fromDate} - {toDate}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
