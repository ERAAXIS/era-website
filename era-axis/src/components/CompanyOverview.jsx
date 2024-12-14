const CompanyOverview = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">About ERA AXIS</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="mb-6">
              At ERA AXIS, we offer custom hardware and software solutions for
              industries and homes, including repairs, installations, and
              troubleshooting.
            </p>
            <p className="mb-6">
              Through ERA AXIS Education, we provide hands-on training in
              electronics, programming, and more, helping learners gain
              practical tech skills.
            </p>
            <p>
              Our goal is to improve efficiency and simplify processes for our
              clients while delivering innovative solutions and educational
              resources tailored to their needs.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/2.jpg"
              alt="ERA AXIS Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
