import { LoginProviders } from "./LoginProviders";
import { CloseIcon } from "../../Icons/CloseIcon";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" 
      onClick={onClose}
    >
      <div className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-w-[516px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray700 px-[4.5rem] py-14 shadow-modal focus:outline-none" onClick={(e) => e.stopPropagation()}>
        <div 
          className="flex items-center justify-center p-3 absolute top-0 right-0 cursor-pointer" onClick={onClose}
        >
          <CloseIcon />
        </div>
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-gray200 text-base font-bold">
            Faça login para deixar sua avaliação
          </h2>
          <LoginProviders />
        </div>
      </div>
    </div>
  );
};

