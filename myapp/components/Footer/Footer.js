import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <Link href="/">
            <span className="text-xl font-bold hover:text-gray-400 transition duration-300">
              <img
                src="../fav.png"
                height={50}
                width={50}
              />
            </span>
          </Link>
        </div>
        <div className="text-sm">
          <p>2024 Fitness Market. All Rights Reserved.</p>
          <p className="mt-2">Designed by Your Company</p>
        </div>
        <div className="flex items-center space-x-4 mt-6 lg:mt-0">
          <Link href="#">
            <span className="text-gray-400 hover:text-white transition duration-300">
              About
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-400 hover:text-white transition duration-300">
              Contact
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-400 hover:text-white transition duration-300">
              Terms of Service
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-400 hover:text-white transition duration-300">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
