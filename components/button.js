import Image from "next/image";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export const Buttons = () => {
  return (
    <Link href="/images/Javzanpagam Batmunkh.pdf">
      <AwesomeButton type="primary" >
      CV татах
      </AwesomeButton>
    </Link>
  );
};
