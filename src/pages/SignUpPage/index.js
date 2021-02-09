import { connect } from 'react-redux'
import SignUpPage from './SignUpPage'
import { registrationNewUserPost } from '../../store/actions/user'

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  registrationNewUserPost
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
