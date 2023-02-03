import {useMediaQuery} from "@mui/material";
import {
    List,
    SimpleList,
    Datagrid, TextField,
    EmailField,
    Filter,
    TextInput,
    NumberInput,
    SelectInput,
    SearchInput,
    FunctionField
}
    from "react-admin";
import {UserFilterSidebar} from "./UserFilterSidebar";

const UserFilter = (props:any) => (
    <Filter {...props} >
        <SearchInput placeholder="Поиск по имени и никнейму" source="query" alwaysOn />
        <NumberInput label="Минимальное число активностей" source="min_activities" />
        <NumberInput label="Максимальное число активностей" source="max_activities" />
        <NumberInput label="Минимальный возраст" source="min_age" />
        <NumberInput label="Максимальный возраст" source="max_age" />
        <NumberInput label="Минимальное количество жалоб" source="min_complaints" />
        <NumberInput label="Максимальное количество жалоб" source="max_complaints" />
        <SelectInput label="Пол" source="gender" choices={[
            { id: 'MALE', name: 'Male' },
            { id: 'FEMALE', name: 'Female' },
            { id: 'NON_BINARY', name: 'Non Binary' },
            { id: 'UNKNOWN', name: 'Unknown' },
        ]} />
    </Filter>
);

export const UserList = () => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

    return (
        <List
            filters={<UserFilter/>}
            perPage={25}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.id}
                    secondaryText={(record) => record.fullName}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <>

                    <Datagrid rowClick='show'>
                        <TextField source="id" label="ID"/>
                        <TextField source="nickname" label="Никнейм"/>
                        <TextField source="fullName" label="ФИО"/>
                        {/*<TextField source="gender" label="Пол"/>*/}
                        <FunctionField source="gender"
                                       label="Пол"
                                       render={(render:any)=>{
                            switch (render.gender) {
                                case "MALE":
                                    return "Мужской"
                                case "FEMALE":
                                    return "Женский"
                                case "NON_BINARY":
                                    return "Небинарный"
                                case "UNKNOWN":
                                    return "Неизвестный"
                            }
                        }}/>
                        <EmailField source="email" sortable={false} label="Емейл"/>
                        <TextField source="activities" label="Активности"/>
                        <TextField source="age" label="Возраст"/>
                        <TextField source="reports" label="Жалобы"/>
                        {/*<DeleteButton/>*/}
                        {/*<EditButton/>*/}
                    </Datagrid>
                </>
            )}
        </List>
    );
};





