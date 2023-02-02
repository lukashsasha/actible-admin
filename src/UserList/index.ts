import PeopleIcon from '@mui/icons-material/People';
import {ShowGuesser} from 'react-admin'
import {UserList} from "./UserList";
import ShowUser from "./ShowUser";

export default {
    list: UserList,
    icon: PeopleIcon,
    options: {label: "Пользователи"},
    show: ShowGuesser
};

