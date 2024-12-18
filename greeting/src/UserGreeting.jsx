import PropType from 'prop-types'
function UserGreeting(props){
    const welcome_Msg=<h2 className="greUser">
        Welcome {props.User}
        </h2>
    const loginprompt=<h2 className="relog">
        Please login to continue
        </h2>
    return(
        props.isloggedin? welcome_Msg : loginprompt
    );
}
UserGreeting.PropType={
    isloggedin: PropType.bool,
    User: PropType.string

}
UserGreeting.defaultProps={
    isloggedin: true,
    User: "Guest"
}
export default UserGreeting;