import React from "react";
import ResumeItemEntrada from "../ResumeItemEntrada";
import ResumeItemSaida from "../ResumeItemSaida";
import ResumeItemTotal from "../ResumeItemTotal";
import * as C from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';


const Resume = ({income, expense, total})=>{
    return(
        <C.Container>
            <ResumeItemEntrada title= 'Entradas'Icon= {FaRegArrowAltCircleUp} value={income}/>
            <ResumeItemSaida title= 'Saídas'Icon= {FaRegArrowAltCircleDown} value={expense} />
            <ResumeItemTotal title= 'Total' Icon= {FaDollarSign} value={total} />
        </C.Container>
    )
};

export default Resume;