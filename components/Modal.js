function Modal({ setShowModal }) {
  return (
    <div className="fixed top-0 left-0 z-50 h-full w-full bg-black/50">
      {/* modal box */}
      <div className="my-[10%] mx-auto w-[350px] md:w-[400px] bg-white text-[#333] relative">
        {/* modal body */}
        <div className="p-[50px]">
          <h3 className="font-bold">Log In</h3>
          <form>
            <div className="my-5">
              <label htmlFor="email" className="block uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full border-2 border-[#CCC] rounded-[5px] h-[50px] p-[5px]"
              />
            </div>
            <div className="my-5">
              <label htmlFor="password" className="block uppercase">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full border-2 border-[#CCC] rounded-[5px] h-[50px] p-[5px]"
              />
            </div>
            <p>
              <a href="#">Forgot your email or password</a>
            </p>
            <button class="button bg-black text-white w-full mt-[30px]">
              Log In
            </button>
          </form>
        </div>
        {/* modal footer */}
        <div className="bg-[#F7F7F9] text-[#333] py-5 border-t border-[#EEE] text-center">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-[steelblue]">
              Start your free trial
            </a>
          </p>
        </div>

        <img
          src="http://tny.im/pgk"
          alt=""
          loading="lazy"
          className="cursor-pointer h-[23px] w-[23px] absolute top-5 right-5"
          onClick={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}

export default Modal;
