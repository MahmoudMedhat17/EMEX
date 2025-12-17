import { type TFunction} from "i18next";


const ObjectConversion = (t:TFunction, key: string) => {
    const obj = t(key, { returnObjects: true });

    return Object.values(obj);
};


export default ObjectConversion;