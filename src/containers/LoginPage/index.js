import React, { Component } from 'react'
import { withStyles, Card, CardContent, Typography, Button, TextField } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';
class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Đăng nhập để tiếp tục
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Login
                </Button>
                <Button className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>
                      Đăng ký tài khoản
                    </Button>
                  </Link>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(LoginPage);