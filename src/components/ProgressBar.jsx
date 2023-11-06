/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
    BsGraphUp,
    BsGraphDown,
  } from "react-icons/bs";

export default function ProgressBar(props){
    return (
        <>
        <div className=" w-full lg:w-1/2 p-4 md:px-8 ">
              <div className="shadow-4xl bg-[#002647] p-4 text-white w-full  rounded-xl relative min-h-[160px] max-w-[600px] mx-auto pb-0">
                <h3 className="text-center mb-3">Goal Reached</h3>
                <div className="flex justify-around">
                  <CircularProgressbar
                    value={props.performance}
                    text={`${props.performance}%`}
                    circleRatio={0.5}
                    strokeWidth={15}
                    styles={buildStyles({
                      rotation: 3 / 4,
                      strokeLinecap: "butt",
                      trailColor: "#eee",
                      pathColor: "#FCB000",
                      textColor: "#eee",
                    })}
                  />
                  <div className="flex flex-col gap-2 ">
                    <BsGraphUp style={{color:"#37DD0D", backgroundColor:"#eee"}} size={40} />
                    <BsGraphDown size={40} style={{color:"#DF0100", backgroundColor:"#eee"}}/>
                  </div>
                  
                </div>
              </div>
            </div>
        </>
    )
}