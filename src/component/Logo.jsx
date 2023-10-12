/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
// import { Link } from "components/link";
import logo from "../../public/images/logo-white.png";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link
        href="/"
        sx={{
          variant: "links.logo",
        }}
        scroll={true}
      >
        <Image
          width={120}
          height={`auto`}
          src={logo}
          alt="Investifyd"
          style={{ cursor: "pointer" }}
        />
      </Link>
    </div>
  );
}
