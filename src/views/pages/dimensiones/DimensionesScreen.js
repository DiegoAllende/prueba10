import React from 'react'
import { ContentDimesionComp } from './components/ContentDimensionComp';
import { UIButtonNewComp } from 'components/ui/UIButonNewComp';
import { useModal } from 'hooks/useStates/useModal';
import { ModalDimensionComp } from './components/ModalDimensionComp';

export const DimensionesScreen = () => {
  const [open, openModal, closeModal] = useModal();

  const handleClickNew = () => {
    openModal();
    console.log("new dimension");
  }

  return (
    <section className="homologadas-section">

      <UIButtonNewComp handleClickNew={handleClickNew} title="Nuevo mensaje" />

      {
        [1, 2, 3].map(item => (
          <ContentDimesionComp key={item} valor={item}/>
        ))
      }

      <ModalDimensionComp open={open} onClose={closeModal}/>

    </section>
  )
}
