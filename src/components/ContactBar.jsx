import PakFlag from "../assets/pak_flag.png";
const ContactBar = () => {
  return (
    <div className="flex  py-2 justify-around ">
      {/* contact */}
      <div className="flex justify-between gap-5">
        <div className="flex text-center items-center gap-[2px]">
          <span class="material-symbols-outlined">call</span>
          <div>+923987654321</div>
        </div>

        <div className="flex  items-center gap-[4px]">
          <div class="material-symbols-outlined">mail</div>
          <div>info@bookcart.com</div>
        </div>
      </div>
      {/* language */}
      <div>
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <img
              src={PakFlag}
              alt=""
              className="w-9 h-9 text-center rounded-full object-cover  border-gray-300 shadow-md"
            />
          </div>
          <div className="p-2 text-center ml-3">
            <select
              name="language"
              className="rounded-full border border-red-500 focus:border-red-500 p-[6px] focus:outline-none  text-xs font-light "
            >
              <option value="-1" className="size-1">
                Select your language
              </option>
              <option value="urdu">Urdu</option>
              <option value="eng">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
