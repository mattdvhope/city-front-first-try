import React from "react"
import { withRouter } from "react-router-dom"
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import styles from "./form.module.css"

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default withRouter(({ handleSubmit, handleUpdate, history }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      history.push(`/app/profile`)
    }}
  >
    <p className={styles[`form__instructions`]}>
      For this demo, please log in with the email <code>matt@test.tv</code> and the
      password <code>password</code>.
    </p>

    <input type="hidden" name="utf8" value="✓" />
    <FieldGroup
      id="formControlsEmail"
      label="Email address"
      name="email"
      type="email"
      onChange={handleUpdate}
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      name="password"
      type="password"
      onChange={handleUpdate}
      placeholder="Enter password"
    />
    <Button type="submit">Log In</Button>
  </form>
))
