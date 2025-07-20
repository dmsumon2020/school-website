import Image from "next/image";

const teachers = [
  {
    id: 1,
    profilePhoto: "/images/teachers/teacher1.jpg",
    name: "MD. ALAMGIR	",
    designation: "Headmaster",
    subject: "Mathematics",
    educationalQualification: "M.Sc. in Mathematics",
    joiningDate: "2010-01-15",
    mobile: "01711112233",
    classInCharge: "Class 10",
    dateOfBirth: "1980-05-20",
    gender: "Male",
    bloodGroup: "B+",
    homeDistrict: "Dhaka",
  },
  {
    id: 2,
    profilePhoto: "/images/teachers/teacher2.jpg",
    name: "MD ENAYET HOSSAIN KHAN	",
    designation: "Assistant Headmaster",
    subject: "English",
    educationalQualification: "M.A. in English",
    joiningDate: "2015-08-10",
    mobile: "01822223344",
    classInCharge: "Class 8",
    dateOfBirth: "1987-03-14",
    gender: "Female",
    bloodGroup: "O+",
    homeDistrict: "Chattogram",
  },
  {
    id: 3,
    profilePhoto: "/images/teachers/teacher3.jpg",
    name: "MOHAMMED NASIR UDDIN",
    designation: "Assistant Headmaster",
    subject: "Bangla",
    educationalQualification: "M.A. in Bangla",
    joiningDate: "2012-07-01",
    mobile: "01933334455",
    classInCharge: "Class 6",
    dateOfBirth: "1982-11-05",
    gender: "Male",
    bloodGroup: "A+",
    homeDistrict: "Rajshahi",
  },
  {
    id: 4,
    profilePhoto: "/images/teachers/teacher4.jpg",
    name: "FAZILATUN NESA MUSAMMAT SADEKA KHATUN",
    designation: "Senior Teacher",
    subject: "Science",
    educationalQualification: "M.Sc. in Physics",
    joiningDate: "2009-03-12",
    mobile: "01744445566",
    classInCharge: "Class 9",
    dateOfBirth: "1979-08-23",
    gender: "Female",
    bloodGroup: "AB+",
    homeDistrict: "Sylhet",
  },
  {
    id: 5,
    profilePhoto: "/images/teachers/teacher5.jpg",
    name: "SHAHNAJ PARVIN",
    designation: "Assistant Teacher",
    subject: "ICT",
    educationalQualification: "B.Sc. in Computer Science",
    joiningDate: "2018-02-25",
    mobile: "01655556677",
    classInCharge: "Class 7",
    dateOfBirth: "1990-12-10",
    gender: "Male",
    bloodGroup: "O-",
    homeDistrict: "Khulna",
  },
  {
    id: 6,
    profilePhoto: "/images/teachers/teacher6.jpg",
    name: "JHARNA MISTRY",
    designation: "Assistant Teacher",
    subject: "Religion",
    educationalQualification: "Kamil in Islamic Studies",
    joiningDate: "2016-06-18",
    mobile: "01766667788",
    classInCharge: "Class 5",
    dateOfBirth: "1985-01-02",
    gender: "Female",
    bloodGroup: "B+",
    homeDistrict: "Cumilla",
  },
  {
    id: 7,
    profilePhoto: "/images/teachers/teacher7.jpg",
    name: "MD. ABUL HASHEM",
    designation: "Senior Teacher",
    subject: "Social Science",
    educationalQualification: "M.S.S. in Political Science",
    joiningDate: "2011-09-09",
    mobile: "01877778899",
    classInCharge: "Class 9",
    dateOfBirth: "1981-04-17",
    gender: "Male",
    bloodGroup: "A-",
    homeDistrict: "Barisal",
  },
  {
    id: 8,
    profilePhoto: "/images/teachers/teacher8.jpg",
    name: "MD. ANOWER HOSSAIN",
    designation: "Assistant Teacher",
    subject: "Biology",
    educationalQualification: "M.Sc. in Zoology",
    joiningDate: "2019-11-05",
    mobile: "01788889900",
    classInCharge: "Class 7",
    dateOfBirth: "1991-06-30",
    gender: "Female",
    bloodGroup: "AB-",
    homeDistrict: "Mymensingh",
  },
  {
    id: 9,
    profilePhoto: "/images/teachers/teacher9.jpg",
    name: "LATIFA YEASMIN",
    designation: "Assistant Teacher",
    subject: "Chemistry",
    educationalQualification: "M.Sc. in Chemistry",
    joiningDate: "2013-04-20",
    mobile: "01599990011",
    classInCharge: "Class 10",
    dateOfBirth: "1984-10-01",
    gender: "Male",
    bloodGroup: "B-",
    homeDistrict: "Rangpur",
  },
  {
    id: 10,
    profilePhoto: "/images/teachers/teacher10.jpg",
    name: "SHAHANAZ BEGUM",
    designation: "Senior Teacher",
    subject: "Economics",
    educationalQualification: "M.S.S. in Economics",
    joiningDate: "2008-05-22",
    mobile: "01600001122",
    classInCharge: "Class 8",
    dateOfBirth: "1978-09-12",
    gender: "Female",
    bloodGroup: "O+",
    homeDistrict: "Jessore",
  },
];

export default function TeachersList() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="mb-10 border-b-2 border-dashed pb-8">
          <div className="flex items-start space-x-6">
            {/* Profile Image */}
            <div className="w-60 h-60 relative flex-shrink-0">
              <Image
                src={teacher.profilePhoto}
                alt={teacher.name}
                layout="fill"
                objectFit="cover"
                className="border-2 border-theme-ascent"
              />
            </div>

            {/* Info Block */}
            <div>
              <h2 className="text-2xl font-bold text-theme-ascent uppercase">
                {teacher.name}
              </h2>

              <div className="mt-2 text-lg text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-8">
                <p>
                  <span className="font-semibold">Designation:</span>{" "}
                  {teacher.designation}
                </p>
                <p>
                  <span className="font-semibold">Subject/Dept:</span>{" "}
                  {teacher.subject}
                </p>
                <p>
                  <span className="font-semibold">Qualification:</span>{" "}
                  {teacher.educationalQualification}
                </p>
                <p>
                  <span className="font-semibold">Joining Date:</span>{" "}
                  {teacher.joiningDate}
                </p>
                <p>
                  <span className="font-semibold">Class In-Charge:</span>{" "}
                  {teacher.classInCharge}
                </p>
                <p>
                  <span className="font-semibold">Date of Birth:</span>{" "}
                  {teacher.dateOfBirth}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {teacher.gender}
                </p>
                <p>
                  <span className="font-semibold">Blood Group:</span>{" "}
                  {teacher.bloodGroup}
                </p>
                <p>
                  <span className="font-semibold">Home District:</span>{" "}
                  {teacher.homeDistrict}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {teacher.mobile}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
