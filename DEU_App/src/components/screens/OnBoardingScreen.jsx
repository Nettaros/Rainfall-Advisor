import React  from 'react'
import { SafeAreaView, StyleSheet, Dimensions, FlatList, View, Text, TouchableOpacity} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Settings from '../settings/Settings';
import * as RootNavigation from '../../navigation/RootNavigation'
import Slide from '../slides/Slide';

const {width, height} = Dimensions.get('window');
const slides = [
    {
        id: '1',
        title: '¡Te damos la bienvenida a NOMBREDEAPP!',
        subtitle: 'En esta aplicación vas a poder enterarte del nivel de precipitación actual en la Zona de La Plata. La precipitación se actualiza cada 15 minutos por defecto, esta y otras opciones más se pueden configurar en la pestaña de Configuración'
    },
    {
        id: '2',
        title: '¡Tambien tenemos recomendaciones!',
        subtitle: 'En la pestaña de recomendaciones vas a encontrar información sobre qué hacer antes, durante y después de una inundación'
    },
    {
        id: '3',
        title: '¿Cuándo está lloviendo demasiado?',
        subtitle: 'Cuando la lluvia este en niveles alarmantes la aplicación va a cambiar un poco su aspecto y te vamos a notificar para que puedas ver rápidamente qué hacer durante la inundación'
    },
    {
        id: '4',
        title: "¿Cómo recorro la aplicación?",
        subtitle: "En la esquina superior izquierda de la pantalla está el botón que abre el menú del lado izquierdo, ahí vas a encontrar las distintas funcionalidades de la aplicación."
    }
]

const OnBoardingScreen = () =>{
    const theme = Settings();
    const {colors} = useTheme();
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex < slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
        
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;

        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };

    const goToHome = () =>{
        ref?.current.scrollToOffset(0);
        setCurrentSlideIndex(0);
        RootNavigation.navigate("Precipitación");

    }

    const Footer = ()=>{
        return(
            <View style={
                {height: height * 0.25, 
                justifyContent:'space-between',
                paddingHorizontal: 20}}>
                { /* Indicator container */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop:20}}>
                        { /* Render indicator */}
                        {slides.map((_,index) => (
                            <View key={index} style={[styles.indicator, currentSlideIndex == index && {
                                backgroundColor: colors.text,
                                width: 25
                            }]}/>
                        ))}
                    </View>
                { /* Render button */}
                <View style={{marginBottom:20}} accessible={true}> 
                {
                    currentSlideIndex == slides.length - 1 
                    ?(<View style={{height: 50}}>
                        <TouchableOpacity accessibilityRole="button" accessibilityHint={"Cerrar guia y empezar a usar la aplicación"} style={[styles.btn,{backgroundColor: colors.primary}]} onPress={goToHome}>
                            <Text style={{color:colors.text, fontSize: theme.fontSizes.body}} >Empezar</Text>
                        </TouchableOpacity>
                    </View>)
                    :(<View style={{flexDirection:'row'}}>
                        <TouchableOpacity accessibilityRole="button" accessibilityHint={"Cerrar guia y empezar a usar la aplicación"} style={[styles.btn, {backgroundColor: colors.primary}]}>
                            <Text style={{color:colors.text, fontSize: theme.fontSizes.body}} onPress={goToHome}>Ignorar guia</Text>
                        </TouchableOpacity>
                        <View style={{width: 15}}/>
                        <TouchableOpacity accessibilityRole="button" accessibilityHint={"Continuar a la siguiente explicación"} style={[styles.btn, {backgroundColor: colors.primary}]} onPress={goToNextSlide}>
                            <Text style={{color:colors.text, fontSize: theme.fontSizes.body}}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>)
                }
                    
                </View>
            </View>
    )};
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: colors.background}}>
            <FlatList 
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                data={slides} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
)};

const styles= StyleSheet.create({
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: "grey",
        marginHorizontal: 3,
        borderRadius: 2
    },
    btn:{
        flex:1,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default OnBoardingScreen;