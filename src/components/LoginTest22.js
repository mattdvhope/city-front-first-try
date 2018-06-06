import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Home = () => {
  const { name } = getCurrentUser()

  return (
    <form>
		  First name:<br />
		  <input type="text" name="firstname" value="Mickey" />
		  <br />
		  Last name:<br />
		  <input type="text" name="lastname" value="Mouse" />
		  <br />
		  <input type="submit" value="Submit" />
		</form>
  )
}

export default Home



