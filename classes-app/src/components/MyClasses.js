import { Box, VStack } from "native-base";
import React, { useEffect, useState } from "react";

//import Attendance from "attendanceApp/Atttendance";
const Attendance = React.lazy(() => import('AttendanceApp/Attendance'));


const MyClasses = () => {

  const bc = new BroadcastChannel('app_channel');
  useEffect(() => {  
    bc.onmessage = event => { 
      console.log(event); 
      let eventData = event.data;
      if(eventData.eventType === "ATTENDANCE_MARKED"){

        // perform class attendace marked post process. 
        let classUpdatedIdx = classData.findIndex(item=>item.name===eventData.className);
        classData[classUpdatedIdx].status = "DONE";    
        setClasses([...classData]);
      }
    }
    return () => {
      bc.close();
    }
  },[bc]);

    const [classData, setClasses] = useState(
        [
          {name:"Class I", status:"Pending"}, 
          {name:"Class II", status:"DONE"}, 
          {name:"Class III", status:"Pending"}, 
          {name:"Class IV", status:"Pending"}]
    );


    const classElements = classData.map((item, idx) => {
      if(item.status === "Pending")
          return <div key={item.name}><Attendance  name={item.name}></Attendance></div>;
      else    
        return <div key={item.name} >{item.name} : {item.status}</div>; 
    });
  return (
    <React.Suspense fallback="Loading ">
          { classElements}
    </React.Suspense>
  );
};
export default MyClasses;
