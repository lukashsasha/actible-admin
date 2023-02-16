import PeopleIcon from '@mui/icons-material/People';
import {ShowGuesser} from 'react-admin'
import {UserList} from "./UserList";
import ShowUser from "./ShowUser";
import {EditGuesser} from "react-admin";

export default {
    list: UserList,
    icon: PeopleIcon,
    options: {label: "Пользователи"},
    show: ShowUser,
    // edit: EditGuesser
};

