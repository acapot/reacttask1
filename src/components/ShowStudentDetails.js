const ShowStudentDetails = ({student, changeShowDetails}) => {
  
  const handleCloseClick = () => changeShowDetails();

  return(
    
    <div className= "bg-dark d-flex justify-content-center text-white-50 py-5" >
      <div className= "text-start">
        <button type="button" className={`me-1 btn btn-warning`} onClick={handleCloseClick}>Close</button>
        <div><h2>Show Details</h2></div>
        <div><b>id:</b> {student.id}</div>
        <div><b>First Name:</b> {student.firstName}</div>
        <div><b>Last Name:</b> {student.lastName}</div>
        <div><b>Age:</b> {student.age}</div>
        <div><b>Birthdate:</b> {student.birthdate}</div>
        <div><b>Country:</b> {student.country}</div>
        <div><b>City:</b> {student.city}</div>
      </div>
    </div>
  )
}

export default ShowStudentDetails;