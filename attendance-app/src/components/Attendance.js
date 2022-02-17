

export const  Attendance = ({name})=>{
    const bc = new BroadcastChannel('app_channel');

    console.log("reder Attendance")
    const onAttendanceClick=()=>{
        console.log('onAttendanceClick');
        // API call business
        let message = {eventType: "ATTENDANCE_MARKED", className:name};
        bc.postMessage(message);
    }
    return (
        <button onClick={onAttendanceClick}>Mark Attendace:{name} </button>
    );
}


//const Attendance = () => <button>Hello from remote</button>;
export default Attendance;