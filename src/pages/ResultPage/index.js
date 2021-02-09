import { connect } from 'react-redux'
import ResultPage from './ResultPage'

const mapStateToProps = state => ({
  cars: state.user.cars
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPage)
