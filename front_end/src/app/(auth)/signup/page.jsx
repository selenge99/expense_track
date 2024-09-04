const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h2>Create Geld account</h2>
      <div className="flex flex-col gap-4">
        <img src="./logo.svg" width={90} height={25} alt="Logo" />
        <input
          type="text"
          placeholder="Name"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="text"
          placeholder="Re-password"
          className="w-full max-w-xs input input-bordered"
        />
        <button className="btn bg-[#0166FF] text-white">Sign Up</button>
      </div>
      <div>
        <span>Already have account?</span>
        <button className="btn btn-link">Log in</button>
      </div>
    </div>
  );
};

export default SignUp;
