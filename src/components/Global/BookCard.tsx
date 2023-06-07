'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { BookDetails } from './BookDetails';
import { BookReview } from './BookReview';
import { X } from 'lucide-react';
import { BookInfo } from '../Explore/BookInfo';

interface BookCardProps {
  w: string;
  h: string;
}

export function BookCard({ w, h }: BookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="space-y-5 px-5 py-4 rounded-lg bg-gray700 cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
          <BookDetails width={w} height={h} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray800/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed inset-y-0 right-0 w-[660px] rounded-xl bg-gray800 px-[4.5rem] py-14 shadow-modal overflow-y-auto scrollbar-thin scrollbar-track-gray700 scrollbar-thumb-gray600 focus:outline-none">
          <Dialog.Close>
            <div className="flex items-center justify-center p-1 absolute top-6 right-12 cursor-pointer">
              <X className="w-6 h-6 text-gray400" />
            </div>
          </Dialog.Close>
          <div className="space-y-10">
            <BookInfo />
            <BookReview />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
