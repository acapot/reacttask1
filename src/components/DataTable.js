import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ShowStudentDetails from "./ShowStudentDetails";

const DataTable = () => {
  const initialStudentList = [{
    id: 1, 
    firstName: "Alexis", 
    lastName: "Capot", 
    age: 45, 
    birthdate: "73/06/05",
    country: "Sweden",
    city: "Växjö"
    },
    {
    id: 2, 
    firstName: "Jaime", 
    lastName: "Mondaca", 
    age: 25, 
    birthdate: "93/06/05",
    country: "Chile",
    city: "Santiago"
    },
    {
      id: 3, 
      firstName: "Laura", 
      lastName: "Miranda", 
      age: 35, 
      birthdate: "73/06/05",
      country: "Sweden",
      city: "Växjö"
      },
      {
      id: 4, 
      firstName: "Jaime", 
      lastName: "Mondac", 
      age: 25, 
      birthdate: "93/06/05",
      country: "Chile",
      city: "Santiago"
      },
      {
        id: 5, 
        firstName: "Åsa", 
        lastName: "Gutierrez", 
        age: 45, 
        birthdate: "73/06/05",
        country: "Sweden",
        city: "Växjö"
        },
        {
        id: 6, 
        firstName: "Gabriel", 
        lastName: "Perez", 
        age: 20, 
        birthdate: "03/06/05",
        country: "Sweden",
        city: "Växjö"
        }
  ];

const [showDetails, setShowDetails] = useState(false);
const [studentToShow, setStudentToShow] = useState();

const handleEditClick = (studentId) => { 
                                console.log(studentId);
                                setShowDetails(true)
                                setStudentToShow(initialStudentList.filter(({id})=>id === studentId));

                              };

const changeShowDetails = () => setShowDetails(!showDetails);

const rows = initialStudentList.map((student,i)=> <TableRow key={"a"+i} student={student} handleEditClick={handleEditClick}/>);

const compDetails = showDetails ? <ShowStudentDetails student={studentToShow[0]} changeShowDetails={changeShowDetails}/> : "";
const table = <>
                <table className="table table-striped table-dark">
                  <thead>
                    <TableHeader />
                  </thead>
                  <tbody>
                    {rows}               
                  </tbody>
                </table>
                {compDetails}
              </>;

 return (table);
};

export default DataTable;