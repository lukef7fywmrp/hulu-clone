import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#EBEDF2] text-[#333]">
      {/* footer container */}
      <div className="max-w-screen-lg m-auto p-10">
        {/* footer lists */}
        <div className="flex flex-col md:flex-row justify-between">
          <ul>
            <li className="list-head">BROWSE</li>
            <li>
              <a href="#">Streaming Library</a>
            </li>
            <li>
              <a href="#">Live TV</a>
            </li>
            <li>
              <a href="#">Live News</a>
            </li>
            <li>
              <a href="#">Live Sports</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Originals</a>
            </li>
            <li>
              <a href="#">Networks</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">FX on Hulu</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Hulu, Disney+, and ESPN</a>
            </li>
            <li>
              <a href="#">Disney Bundle</a>
            </li>
            <li>
              <a href="#">HBO Max</a>
            </li>
            <li>
              <a href="#">Cinimax</a>
            </li>
            <li>
              <a href="#">Showtime</a>
            </li>
            <li>
              <a href="#">STARZ</a>
            </li>
          </ul>

          <ul>
            <li className="list-head">HELP</li>
            <li>
              <a href="#">Account & Billing</a>
            </li>
            <li>
              <a href="#">Plans & Pricing</a>
            </li>
            <li>
              <a href="#">Supported Devices</a>
            </li>
            <li>
              <a href="#">Accesibility</a>
            </li>
          </ul>

          <ul>
            <li className="list-head">ABOUT US</li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* divider */}
        <div className="w-full h-[3px] border-t border-[#CCC] my-[30px]" />
        {/* Social Icons */}
        <div className="flex items-center space-x-[25px]">
          <a href="#">
            <Image
              src="http://tny.im/pgg"
              width={25}
              height={25}
              objectFit="contain"
            />
          </a>
          <a href="#">
            <Image
              src="http://tny.im/pgh"
              width={25}
              height={25}
              objectFit="contain"
            />
          </a>
          <a href="#">
            <Image
              src="http://tny.im/pgi"
              width={25}
              height={25}
              objectFit="contain"
            />
          </a>
          <a href="#">
            <Image
              src="http://tny.im/pgj"
              width={25}
              height={25}
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
