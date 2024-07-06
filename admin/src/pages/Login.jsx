
function Login() {
    return (
          <div className="w-full h-full flex justify-center items-center bg-red-500">
              <div className="bg-red-500 w-max p-4">
                  <h1>Login</h1>
                  <div>
                      <p>Username</p>
                      <input type="text" />
                  </div>
                  <div>
                      <p>Password</p>
                      <input type="text" />
                  </div>
              </div>
          </div>
    )
  }
  
  export default Login
  