import React from "react";
import {View, ScrollView, Text} from 'react-native'
import TabListElement from "../style/tabListElement";

const RecoBeforeScreen = () => {
    return (
        <View accessible={true}>
            <ScrollView>
                <TabListElement text=
                    "Recogé la basura, escombros, ramas y hojas de tu casa para evitar que obstaculicen el paso del agua durante lluvias intensas y desborde de arroyos"/>
                <TabListElement text="Revisá periódicamente el estado de techos, canaletas, rejillas y desagües pluviales de tu casa. Sellá posibles filtraciones con algún material impermeable"/>
                <TabListElement text="Identificá que muebles o ropa pueden verse afectados por el agua. Planificá como podrías elevarlos en caso de precisarlo y de ser posible, adelantate y colocalos en un lugar alto."/>
                <TabListElement text="Asegurá que todos en la casa sepan cómo cortar los servicios de agua, luz y gas"/>
                <TabListElement text="Verificá si tu casa está cerca o dentro de una zona con riesgo de inundación, y si lo está identificá a que zonas altas pueden dirigirse en caso de necesitarlo"/>
                <TabListElement text="Determiná prioridades de evacuación y resguardo para cualquier persona del hogar que tenga problemas de movilidad u otras necesidades especiales"/>
                <TabListElement text="Colocá en una bolsa hermética y en un lugar seguro los documentos, partidas de nacimiento, libretas sanitarias, pasaportes, pólizas de seguros, escrituras y cualquier otro documento de valor."/>
                <TabListElement text="Prepará un equipo de seguridad que puedas tener a disposición en caso de emergencia, puede contener: Agua potable, Alimentos envasados o enlatados, linterna con pilas y pilas de repuesto, radio a pilas, documentos y dinero, medicamentos y botiquín de primeros auxilios"/>
                <TabListElement text="Debemos tomar el hábito de mantener limpios todos los espacios que frecuentamos, es decir: no tirar basura al piso, a las zanjas o arroyos, sino hacerlo en lugares permitidos."/>
                <TabListElement text="No saques los residuos durante las tormentas, ya que estos podrían obstruir el paso del agua."/>
            </ScrollView>
        </View>
    )
}

export default RecoBeforeScreen