import {useState} from 'react';

type UseModal = () => {
    isOpen: boolean;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
}


const useModal:UseModal = ()=>{
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const handleOpenModal = ()=>setIsOpen(true);
   const handleCloseModal = ()=> setIsOpen(false);

   return {
      isOpen,
      handleCloseModal,
      handleOpenModal
   }
}

export default useModal