import React, { useEffect, useState } from "react";

//import Attendance from "attendanceApp/Atttendance";
const Attendance = React.lazy(() => import('AttendanceApp/Attendance'));


const MyClasses = () => {

  const bc = new BroadcastChannel('app_channel');
  useEffect(() => {  
    bc.onmessage = event => { 
      console.log(event); 
      let eventData = event.data;
      let {attendance} = eventData;
      if(eventData.eventType === "ATTENDANCE_MARKED"){

        // perform class attendace marked post process. 
        let classUpdatedIdx = classData.findIndex(item=>item.name===attendance.className);
        classData[classUpdatedIdx].status = "DONE";    
        classData[classUpdatedIdx].present = attendance.present;    
        classData[classUpdatedIdx].absent = attendance.absent;    
        setClasses([...classData]);
      }
    }
    return () => {
      bc.close();
    }
  },[bc]);

    const [classData, setClasses] = useState(
        [
          {name:"Class I", status:"Pending", present:0, absent:0,  total: 30}, 
          {name:"Class II", status:"DONE", present:25, absent:5,  total: 30}, 
          {name:"Class III", status:"Pending", present:0, absent:0,  total: 40}, 
          {name:"Class IV", status:"Pending", present:0, absent:0,  total: 35}]
    );


    const classElements = classData.map((item, idx) => {
      if(item.status === "Pending")
          return (
          <div key={item.name}>
            <div className="row">{item.name}</div>
            <div className="row">
            <div className="col-4">Total:{item.total}</div>
            <div className="col-4">Present:{item.present}</div>
            <div className="col-4">Absent:{item.absent}</div>
            </div>
            <Attendance classData={item} name={item.name}></Attendance>
            <hr></hr>
          </div>);
          
      else    
        return (
          <div key={item.name}>
            <div className="row">{item.name}</div>
            <div className="row">
            <div className="col-4">Total:{item.total}</div>
            <div className="col-4">Present:{item.present}</div>
            <div className="col-4">Absent:{item.absent}</div>
            </div>
            <hr></hr>
          </div>
        ); 
    });
  return (
    <React.Suspense fallback="Loading ">
      <div style={{margin: 20}}>
          { classElements}
      </div>
    </React.Suspense>
  );
};
export default MyClasses;
