import React, { useEffect, useState } from 'react'
import { ContentParametroComp } from './components/ContentParametroComp'
import { paramterService } from 'data/services/api/parameterService';
import { UIButtonNewComp } from 'components/ui/UIButonNewComp';
import { useModal } from 'hooks/useStates/useModal';
import { ModalParameterComp } from './components/ModalParameterComp';
import { LoaderCircle } from 'components/ui/LoaderCircle';

const initDataSave = {
    id_parameter: 0, group_code: '', group: '', long_description: '', thematic_code: '',
    thematic: '', short_description: '', percentage: '', number: '', rank_1: '', rank_2: ''
};

const validatinsFields = (values) => {
    const errors = {}
    if (!values.group_code) errors.group_code = 'Campo es requerido'
    if (!values.group) errors.group = 'Campo es requerido'
    if (!values.long_description) errors.long_description = 'Campo es requerido'
    if (!values.thematic_code) errors.thematic_code = 'Campo es requerido'
    if (!values.thematic) errors.thematic = 'Campo es requerido'
    if (!values.short_description) errors.short_description = 'Campo es requerido'
    if (!values.percentage) errors.percentage = 'Campo es requerido'
    if (!values.number) errors.number = 'Campo es requerido'
    if (!values.rank_1) errors.rank_1 = 'Campo es requerido'
    if (!values.rank_2) errors.rank_2 = 'Campo es requerido'
    return errors;
}

export const ParametrosScreen = () => {
    const [open, openModal, closeModal] = useModal();
    const [loader, openLoader, closeLoader] = useModal();
    const [dataParameter, setDataParameter] = useState([]);
    const [dataEdit, setDataEdit] = useState({ datos: initDataSave, isEdit: false });

    /*METODOS PARA CONSUMIR LOS SERVICIOS*/
    const getData = () => {
        openLoader()
        setTimeout(() => {
            paramterService.getDataService().then(resp => {
                setDataParameter(resp.data);
                closeLoader()
            }).catch(err => console.log("error: ", err));
        }, 3000);
    }

    const savaParameter = (datos) => {
        console.log("saveee", datos);
        closeModal();
        // paramterService.saveParameterService(datos).then(resp => {
        //     btnAction(resp);
        // }).catch(err => console.log("error: ", err));
    }

    const editParameter = (datos) => {
        console.log("edittt", datos);
        closeModal();
        // paramterService.updParameterService(datos, datos.id_parameter).then(resp => {
        //     btnAction(resp);
        // }).catch(err => console.log("error: ", err));
    }

    /*MODALES*/
    const handleModal = (datos, isEdit) => {
        setDataEdit({ datos: datos, isEdit: isEdit });
        openModal();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className="homologadas-section">
            
            <UIButtonNewComp handleClickNew={() => handleModal(initDataSave, false)} title="Nuevo mensaje" />
            {
                dataParameter.map(item => (
                    <ContentParametroComp key={item.id_parameter} data={item} getDataEdit={handleModal} />
                ))
            }

            {open &&
                <ModalParameterComp open={open} onClose={closeModal} savaParameter={savaParameter} editParameter={editParameter}
                    data={dataEdit} validatinsFields={validatinsFields}
                />
            }

            {loader && 
                <LoaderCircle open={loader}/>
            }
        </section>
    )
}
