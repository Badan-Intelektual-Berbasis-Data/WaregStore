
function Login() {
    return (
          <div className="min-h-screen flex items-center justify-center ">
          <div className="bg-gray-400 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-black">Email</label>
                    <input 
                    type="email"
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus focus:ring-2 focus:ring-black" 
                     placeholder="enter your email"
                     />
                     </div>
                     <div className=" mb-6">
                        <label className="block text-black">Password</label>
                        <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="enter your password"
                        />
                        </div>
                        <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                        Login
                        </button>
                    </form>
                    </div>
                    </div>

    )
  }
  
  export default Login
  