import TableAction from "./TableAction";

const TableRow = ({student, handleEditClick} ) => {
  
  return (<tr><td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
              <td>{student.birthdate}</td>
              <td>{student.country}</td>
              <td>{student.city}</td>
              <td>
                <TableAction student={student} handleEditClick={handleEditClick} css="primary" btnName="Edit"/>
              </td>
          </tr>);
}

export default TableRow;