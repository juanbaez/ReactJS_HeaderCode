import MenuBarTabs from '../menuBarTabs'
import MainHeader from '../mainHeader'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const styles = theme => ({
  palette: {
    primary: { main: '#ffebee' },
    secondary: orange
  }
})

const Layout = (props) => (
  <div>
    <MainHeader />
    <MenuBarTabs />
    <Grid container direction='column' justify='center' alignItems='center' style={{ marginTop: '10px' }}>
      {props.children}
    </Grid>
  </div>
)

export default Layout
