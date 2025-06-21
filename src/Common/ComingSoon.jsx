import underprocess from "../assets/images/Underprocess.png";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center   px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Coming Soon
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6">
        This site is currently under process. Please check back later!
      </p>
      <img
        src={underprocess}
        alt="Under Process"
        className="w-auto sm:w-auto md:w-96 lg:w-[900px] h-auto object-contain"
      />
    </div>
  );
}
