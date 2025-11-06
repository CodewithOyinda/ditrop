import Button from "../buttons/Button";

const Powered = () => {
  return (
    <div className="flex flex-col   bg-white py-10">
      <p className="font-['DM Sans'] text-[28px] sm:text-[50px] font-[700] text-gray-900">Smiles Powered by <br/>Ditrop</p>
      <p>Ditrop makes life easier and more joyful. Experience the <br/>convenience and happiness powered by Ditrop.</p>
      <div className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="border border-[#9dbbff] rounded-[20px] px-4 py-2 focus:outline-none focus:ring-2 bg-[#e6eeff] text-[#5c667b] flex-1"
              />
              <Button size="blue" />
            </div>
    </div>
  );
}

export default Powered;
