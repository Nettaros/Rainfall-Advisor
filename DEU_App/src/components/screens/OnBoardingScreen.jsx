import React  from 'react'
import { SafeAreaView, StyleSheet, Dimensions, FlatList, View, Text, TouchableOpacity} from 'react-native'
import {useTheme} from '@react-navigation/native';
import Theme from '../settings/theme';
import * as RootNavigation from '../../navigation/RootNavigation'
import Slide from '../slides/Slide';

const {width, height} = Dimensions.get('window');
const slides = [
    {
        id: '1',
        title: 'Bienvenido!',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id: '2',
        title: 'Un poco sobre nuetra app....',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    
    {
        id: '3',
        title: 'Un poco mas sobre la app',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
]

const OnBoardingScreen = () =>{
    const theme = Theme();
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
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(currentSlideIndex + 1);
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
                <View style={{marginBottom:20}}> 
                {
                    currentSlideIndex == slides.length - 1 
                    ?(<View style={{height: 50}}>
                        <TouchableOpacity style={[styles.btn,{backgroundColor: colors.primary}]} onPress={goToHome}>
                            <Text style={{color:colors.text, fontSize: theme.fontSizes.body}} >Empezar</Text>
                        </TouchableOpacity>
                    </View>)
                    :(<View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={[styles.btn, {backgroundColor: colors.primary}]}>
                            <Text style={{color:colors.text, fontSize: theme.fontSizes.body}} onPress={skip}>Saltar</Text>
                        </TouchableOpacity>
                        <View style={{width: 15}}/>
                        <TouchableOpacity style={[styles.btn, {backgroundColor: colors.primary}]} onPress={goToNextSlide}>
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