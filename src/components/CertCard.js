export default function CertCard(props) {
  const link = props.link;
  const img = props.img;
  const certName = props.certName;
  const issuedBy = props.issuedBy;
  const toDate = props.toDate;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-full h-full bg-indigo-100 rounded-md py-4 px-4"
    >
      <img
        src={img}
        className="w-full h-56 mx-auto object-cover"
        alt={"The certificaiton proof picture of " + certName}
      />
      <div className="mt-2">
        <h4 className="font- md:text-xl text-gray-600">
          <a
            aria-label={"The URL for the certificaiton proof web site."}
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            {certName}
          </a>
        </h4>
        <p className="font-light md:text-lg text-gray-600">
          Issued by {issuedBy}
        </p>
        {toDate && (
          <p className="font-light text-gray-400">
            This is valid until {toDate}
          </p>
        )}
      </div>
    </div>
  );
}
