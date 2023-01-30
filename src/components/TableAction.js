const TableAction = ({css, btnName, handleEditClick, student}) => <button type="button" className={`me-1 btn btn-${css}`} key={btnName} onClick={() => handleEditClick(student.id)}>{btnName}</button>;
/*
const actions = [{name: "Remove", class: "me-1 btn btn-danger"},
                {name : "Details", class: "me-1 btn btn-primary"},
                {name : "Edit", class: "me-1 btn btn-warning"}];


const actionsButton = actions.map(action => <button type="button" className={action.class} key={action.name}>{action.name}</button>);
*/

export default TableAction;