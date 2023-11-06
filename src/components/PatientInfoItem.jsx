/* eslint-disable react/prop-types */

export default function PatientInfoItem(props){
    return (
        <div className='flex justify-around '>
              <p className='w-2/5 md:w-1/2 text-[#7D7D7D]' >{props.title}</p>
              <p className='w-3/5 md:w-1/2 flex items-center gap-4 '> {props.icon} {props.info}</p>
            </div>
    )
}