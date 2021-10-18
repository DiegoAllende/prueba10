import React from 'react'
import { ContentHomComp } from './components/ContentHomComp';
import { UIButtonNewComp } from 'components/ui/UIButonNewComp';
import { useModal } from 'hooks/useStates/useModal';
import { ModalHomologateComp } from './components/ModalHomologateComp';

export const HomologadasScreen = () => {
  const [open, openModal, closeModal] = useModal();
  
  const handleClickNew = () => {
    openModal();
    console.log("new homologado");
  }

  return (
    <section className="homologadas-section">

      <UIButtonNewComp handleClickNew={handleClickNew} title="Nuevo código homologado" />
      
      <h3 style={{marginTop: '0px'}}>Pendientes</h3>
      {
        [1, 2, 5].map(item => (
          <ContentHomComp key={item} valor={item} />
        ))
      }

      <h3>Homologadas</h3>
      {
        [3, 4, 6].map(item => (
          <ContentHomComp key={item} valor={item} />
        ))
      }

      <ModalHomologateComp open={open} onClose={closeModal}/>
    </section>
  )
}
