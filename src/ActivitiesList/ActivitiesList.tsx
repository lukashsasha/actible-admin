import {useMediaQuery} from "@mui/material";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    UrlField,
    Filter,
    TextInput,
    NumberInput,
    SelectInput,
    DateField,
    DateInput
} from "react-admin";


const ActivitiesFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="Поиск по ID и описанию" source="query" alwaysOn />
        <DateInput label="Создано ПОСЛЕ" source="createdAfter"/>
        <DateInput label="Создано ДО" source="createdBefore"/>
        <SelectInput label="Пол" source="gender" choices={[
            { id: 'MALE', name: 'Male' },
            { id: 'FEMALE', name: 'Female' },
            { id: 'NON_BINARY', name: 'Non Binary' },
            { id: 'UNKNOWN', name: 'Unknown' },
        ]} />
    </Filter>
);


export const ActivitiesList = () => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    return (
        <List
            filters={<ActivitiesFilter/>}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id"/>
                    <DateField source="created"/>
                    <TextField source="description" sortable={false}/>
                    <UrlField source="link"/>
                    <TextField source="location.secondTitle" label="Location"/>
                    <TextField source="reportCount"/>
                    <TextField source="onlineLocation"/>
                </Datagrid>
            )}
        </List>
    );
};