export default function AboutCard({ label, image, dot }) {
  return (
    <div>
      <div className="flex px-10 gap-5 py-2 items-center border-l-3 border-r-3 border-[#f66f5c]">
        <img src={image} className="w-10 h-10" />
        <div>
          <p className="text-white">{label}</p>
        </div>
      </div>
      <div
        className={`h-6 flex ${
          dot ? "block" : "hidden"
        } justify-between w-[100%] relative`}
      >
        <span className=" inline-block rounded-full bg-[#f66f5c] w-2 h-2 absolute left-[-3px] top-2"></span>
        <span className=" inline-block rounded-full bg-[#f66f5c] w-2 h-2 absolute right-[-3px] top-2"></span>
      </div>
    </div>
  );
}
