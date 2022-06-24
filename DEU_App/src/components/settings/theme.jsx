
import settings from "./settings.jsx"

export default function Theme(){
    const setting = settings()
    return({
        fontSizes: {
            body: setting.fontSize,
            subheading: setting.fontSize+2,
            title: setting.fontSize+4,
            small: setting.fontSize-2
        },
        updateTime: {
            seconds: setting.fetchCoolDown
        }
    });
};

