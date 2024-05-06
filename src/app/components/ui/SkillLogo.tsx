import Image from "next/image";

export const SkillLogo = ({ path, language }: any) => {
  return (
    <Image
      src={`/images/icons/${path}`}
      className="max-h-8"
      width={32}
      height={32}
      alt={language}
    />
  );
};
