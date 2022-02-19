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
                <input className="form-control mx-2 mb-3"onChange={onChange} type={"number"} max={classData.total}></input>
                <button className="btn btn-success mx-2" onClick={onAttendanceClick}>Save</button>
                <button className="btn btn-danger" onClick={onEditCancelClick}>Cancel</button>
            </div>):(
                <button className="btn btn-primary" onClick={onEditClick}>Mark Attendace:{classData.name} </button>
            )}
        </>
    );
}


//const Attendance = () => <button>Hello from remote</button>;
export default Attendance;