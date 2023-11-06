/* eslint-disable no-unused-vars */
import "./App.css";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsFileMedicalFill } from "react-icons/bs";
import {
  LiaFileMedicalAltSolid,
  LiaBriefcaseMedicalSolid,
} from "react-icons/lia";
import { GiMuscularTorso } from "react-icons/gi";
import PatientInfoItem from "./components/PatientInfoItem";
import ProgressBar from "./components/ProgressBar";

const PATIENT = {
  name: "S.Meena",
  gender: "F",
  age: 23,
  picture:
    "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-28.jpg",
  phone: 8022334455,
  email: "s.meena@gmail.com",
  id: "87 20200727153457",
};

const MEDICAL_DETAILS = {
  affectedSide: "Billateral",
  condition: "Ortho",
  speciality: "Osteoarthritis",
  medicalHistory: ["Hypertension", "DM", "Hypothyrodism"],
};

const PERFORMANCE = 40;

function App() {
  return (
    <>
      <section className=" bg-[#002647] pt-8">
        <div className="bg-[#FFFFFF] text-[#002647]">
          <div>
            <h2 className="p-4 text-xl md:text-2xl flex gap-x-3 items-center">
              {" "}
              <AiOutlineArrowLeft style={{ cursor: "pointer" }} /> View patient
            </h2>
          </div>
          <hr className="ruler mb-4" />
          <div className="patientNameProgressCon ">
            <div className="patientNameCon">
              <div className="md:w-3/4 lg:w-1/2 ">
                <h3>
                  {PATIENT.name}, {PATIENT.gender}/{PATIENT.age}{" "}
                </h3>
                <p>Patient ID : {PATIENT.id}</p>
              </div>
              <img
                className="rounded-full h-10 object-cover border-2 border-[#002647]"
                src={PATIENT.picture}
                alt="patient pfp"
              />
            </div>
            <ProgressBar performance={PERFORMANCE} />
          </div>

          <div className="patientDetailsContainer ">
            <div className="p-4 sm:px-8 md:px-12">
              <PatientInfoItem
                title={"Phone no."}
                info={PATIENT.phone}
                icon={<BsFillTelephoneFill />}
              />
              <PatientInfoItem
                title={"Mail ID"}
                info={PATIENT.email}
                icon={<AiOutlineMail />}
              />
              <PatientInfoItem
                title={"Affected Side"}
                info={MEDICAL_DETAILS.affectedSide}
                icon={<GiMuscularTorso style={{ color: "#DF0100" }} />}
              />
              <PatientInfoItem
                title={"Condition"}
                info={MEDICAL_DETAILS.condition}
                icon={<BsFileMedicalFill />}
              />
              <PatientInfoItem
                title={"Speciality"}
                info={MEDICAL_DETAILS.speciality}
                icon={<LiaBriefcaseMedicalSolid />}
              />
            </div>
            <hr className="ruler" style={{ height: "2px" }} />
            <div className="flex justify-around p-4 sm:px-8 md:px-12 pb-6 ">
              <p className="w-1/2 flex items-center gap-1">
                <LiaFileMedicalAltSolid /> Medical Hsitory
              </p>
              <p className="w-1/2  ">
                {" "}
                {MEDICAL_DETAILS.medicalHistory.join(", ")}
              </p>
            </div>
            <hr className="ruler" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
