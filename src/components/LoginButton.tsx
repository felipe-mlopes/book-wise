import Image from 'next/image';

interface LoginButtonProps {
  icon: string;
  content: string;
  href: string
}

export function LoginButton({ icon, content, href }: LoginButtonProps) {
  return (
    <a className="flex items-center gap-5 py-5 px-6 bg-gray600 rounded-md cursor-pointer hover:bg-gray500" href={href}>
      <Image src={icon} alt="logo" width={32} height={32} />
      <strong className="text-lg text-gray200 mr-20">{content}</strong>
    </a>
  );
}
