import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { loginUserPost } from '../../store/actions/user'

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  loginUserPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
