import React, { useState } from "react";


export const  Attendance = ({classData, name})=>{
    const bc = new BroadcastChannel('app_channel');
    const [editing, setEditing] = useState(false);
    const [present, setPresent] = useState(0);

    console.log("reder Attendance")
    const onAttendanceClick=()=>{
        console.log('onAttendanceClick');
        let absent = Math.floor(Math.random() * 10)
        // API call business
        let message = {
            eventType: "ATTENDANCE_MARKED", 
            attendance: {className:name, total:classData.total, 
                present:present,
                absent: classData.total-present
            }
        };
        bc.postMessage(message);
    }
    const onEditClick = ()=>{
        setEditing(true);
    }
    const onChange = (event) =>{
        setPresent(event.target.value);
    }

    const onEditCancelClick = ()=>{
        setEditing(false);
    }
    return (<>
            {editing?(
            <div>
                <label>How many student preset out of <b>{classData.total}</b></label>
                <input onChange={onChange} type={"number"} max={classData.total}></input>
                <button onClick={onAttendanceClick}>Save</button>
                <button onClick={onEditCancelClick}>Cancel</button>
            </div>):(
                <button onClick={onEditClick}>Mark Attendace:{classData.name} </button>
            )}
        </>
    );
}


//const Attendance = () => <button>Hello from remote</button>;
export default Attendance;