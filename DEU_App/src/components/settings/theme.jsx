
import settings from "./Settings.jsx"

export default function Theme(){
    const setting = settings()
    
    return({
        fontSizes: {
            body: setting.fontSize,
            subheading: setting.subheading,
            title: setting.title,
            small: setting.small
        },
        updateTime: {
            seconds: setting.fetchCoolDown
        },
        lastUpdate:{
            millisec: setting.lastUpdate
        }
    });
};

