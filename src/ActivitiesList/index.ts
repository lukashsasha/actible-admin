import AttractionsIcon from '@mui/icons-material/Attractions';
import {ActivitiesList} from "./ActivitiesList";
import {ShowGuesser} from 'react-admin'


export default {
    list: ActivitiesList,
    icon: AttractionsIcon,
    options: {label: "Активности"},
    show: ShowGuesser
};