import Image from "next/image";

export default function FounderPage() {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-theme-ascent font-bold text-5xl text-center mb-10">
        জনাব মরহুম আশরাফ আলী
      </h2>
      {/* Block-1  */}
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Begum Badrunnesa Government Girls&apos; College (BBGGGC), situated
            in Bakshi Bazar, Dhaka, is a prestigious institution dedicated to
            women&apos;s education in Bangladesh. Established in 1948, the
            college has played a pivotal role in empowering women through
            quality education. Named after Begum Badrunnesa Ahmed, a renowned
            social reformer and the first State Minister for Women, Education,
            Sports, and Cultural Affairs, the college embodies her vision of
            accessible education for women. Over the decades, BBGGGC has
            expanded its academic offerings, including honours and master&apos;s
            programs across various disciplines. The college&apos;s commitment
            to academic excellence and holistic development has made it a beacon
            of women&apos;s education in the country.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4 md:p-0 relative">
          <Image
            src="/images/founder1.jpg" // Placeholder image URL
            alt="Begum Badrunnesa Ahmed"
            layout="fill"
            objectFit="cover"
            className="rounded-md md:rounded-none md:rounded-r-lg"
          />
        </div>
      </div>

      {/* Block-2  */}
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: Image */}
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4 md:p-0 relative">
          <Image
            src="/images/founder2.jpg" // Placeholder image URL
            alt="Begum Badrunnesa Ahmed"
            layout="fill"
            objectFit="cover"
            className="rounded-md md:rounded-none md:rounded-r-lg"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Early Beginnings
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Begum Badrunnesa Government Girls&apos; College (BBGGGC), situated
            in Bakshi Bazar, Dhaka, is a prestigious institution dedicated to
            women&apos;s education in Bangladesh. Established in 1948, the
            college has played a pivotal role in empowering women through
            quality education. Named after Begum Badrunnesa Ahmed, a renowned
            social reformer and the first State Minister for Women, Education,
            Sports, and Cultural Affairs, the college embodies her vision of
            accessible education for women. Over the decades, BBGGGC has
            expanded its academic offerings, including honours and master&apos;s
            programs across various disciplines. The college&apos;s commitment
            to academic excellence and holistic development has made it a beacon
            of women&apos;s education in the country.
          </p>
        </div>
      </div>

      {/* Block-3  */}
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Legacy and Future
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Begum Badrunnesa Government Girls&apos; College (BBGGGC), situated
            in Bakshi Bazar, Dhaka, is a prestigious institution dedicated to
            women&apos;s education in Bangladesh. Established in 1948, the
            college has played a pivotal role in empowering women through
            quality education. Named after Begum Badrunnesa Ahmed, a renowned
            social reformer and the first State Minister for Women, Education,
            Sports, and Cultural Affairs, the college embodies her vision of
            accessible education for women. Over the decades, BBGGGC has
            expanded its academic offerings, including honours and master&apos;s
            programs across various disciplines. The college&apos;s commitment
            to academic excellence and holistic development has made it a beacon
            of women&apos;s education in the country.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4 md:p-0 relative">
          <Image
            src="/images/founder3.jpg" // Placeholder image URL
            alt="Begum Badrunnesa Ahmed"
            layout="fill"
            objectFit="cover"
            className="rounded-md md:rounded-none md:rounded-r-lg"
          />
        </div>
      </div>
    </section>
  );
}
