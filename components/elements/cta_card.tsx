import Image from "next/image";

const CTACard = () => {
  return (
    <div className="relative overflow-hidden rounded-md bg-slate-200 px-6 py-10">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-green-700/50" />
      {/* Image */}
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="mt-2 max-w-lg text-lg">
          Thailand is a country in Southeast Asia. It is known for its tropical
          beaches, opulent royal palaces, ancient ruins, and ornate temples
          displaying figures of Buddha.
        </p>
        {/* Form */}
        <form className="mt-6 flex gap-2 items-center">
          <input
            placeholder="Write your email."
            className="rounded-md bg-white/80 px-3 py-2 text-base outline-none ring-neutral-600  placeholder:text-sm  focus:ring-2"
          />
          <button className="text-sm rounded-md bg-neutral-900 px-3 py-2 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
