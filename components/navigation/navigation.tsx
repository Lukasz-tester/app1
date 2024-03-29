import Link from "next/link";
import PaddingContainer from "../layout/padding_container";

const Navigation = () => {
  return (
    <div className="sticky bg-white bg-opacity-80 border-b top-0 left-0 right-0">
    <PaddingContainer>
      <div className="flex items-center justify-between py-5">
        <Link className="text-lg font-bold" href="/">Loddotgo</Link>

        {/* category links */}
        <nav>
          <ul className="flex items-center gap-4 text-neutral-600">
            <li>
              <Link href={"/cities"}>Cities</Link>
            </li>
            <li>
              <Link href={"/experiences"}>Experiences</Link>
            </li>
          </ul>
        </nav>
      </div>
    </PaddingContainer>
    </div>
  );
};

export default Navigation;
