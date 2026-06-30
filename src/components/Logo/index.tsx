import { Image } from "../Image/image";

export default function Logo() {
  return (
    <div className="logo">
      <Image src="/logo.svg" alt="Logo"></Image>
      <span>Code craft</span>
    </div>
  );
}
