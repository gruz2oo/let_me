import { connect } from 'react-redux'
import DashboardPage from './DashboardPage'
import { getDataByCar } from '../../store/actions/user'

const mapStateToProps = state => ({
  cars: state.user.cars
})

const mapDispatchToProps = {
  getDataByCar
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
