import { connect } from 'react-redux'
import PrivateLayout from './PrivateLayout'
import { checkStatusCurrentUser, logoutUserPost } from '../../store/actions/user'

const mapStateToProps = state => ({
  isAuthenticated: state.user.isLogin
})

const mapDispatchToProps = {
  checkStatusCurrentUser,
  logoutUserPost
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateLayout)
