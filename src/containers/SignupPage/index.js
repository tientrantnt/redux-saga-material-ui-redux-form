import React, { Component } from 'react'
import { withStyles, Card, CardContent, Typography, Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';
class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel control={<Checkbox value="agree"/>} 
                  label="Tôi đã đồng ý chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Signup
                </Button>
                <Button className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>
                      Bạn đã có tài khoản?
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
export default withStyles(styles)(SignupPage);