import { connect } from 'react-redux'
import PublicLayout from './PublicLayout'

const mapStateToProps = state => ({
  isAuthenticated: state.user.isLogin
})

const mapDispatchToProps = {
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicLayout)
