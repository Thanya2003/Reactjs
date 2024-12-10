import PropTypes from 'prop-types';
function student(props){
    return(
        <div className="stude">
        <p>Name={props.name}</p>
        <p>Age={props.Age}</p>
        <p>Student={props.isstudent? "Yes" :"No"}</p>
        </div>
    );
}
student.defaultProps={
    name:"Guest",
    Age:10,
    isstudent: false 
}
student.PropTypes={
    name : PropTypes.string,
    Age : PropTypes.number,
    isstudent : PropTypes.bool,

}
export default student;