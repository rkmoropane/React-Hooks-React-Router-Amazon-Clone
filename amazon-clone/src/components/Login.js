import React, {fragment} from 'react'
import Wrapper from './helpers/Wrapper'

const Login = () => {
  return (
    // as one cannot render two elements to the react jsx, we need to wrap them in a single element. We can use a div or a fragment or a wrapper component.
    // <Wrapper> 
    //     <h1>Sign In Page</h1>
    //     <p>This is our login page</p>
    // </Wrapper>

    // <fragment>
    //   <h1>Sign In Page</h1>
    //   <p>This is our login page</p>
    // </fragment>

    <>
      <h1>Sign In Page</h1>
      <p>This is our login page</p>
    </>
  )
}

export default Login;
