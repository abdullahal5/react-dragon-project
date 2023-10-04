import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex gap-4 text-center bg-[#F3F3F3] p-3">
      <button class="btn bg-[#D72050] text-white px-5 py-2 rounded-lg border-none font-poppins">
        Latest
      </button>
      <Marquee className="" pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
