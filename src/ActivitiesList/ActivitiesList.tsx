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
    DateInput,
    ArrayField,
    SingleFieldList,
    FunctionField
} from "react-admin";


const ActivitiesFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Поиск по ID и описанию" source="query" alwaysOn/>
        <DateInput label="Создано ПОСЛЕ" source="createdAfter"/>
        <DateInput label="Создано ДО" source="createdBefore"/>
        <NumberInput label="Поиск по ID" source="userId"/>
        <TextInput label="Поиск по месту" source="location"/>
        <SelectInput label="Пол" source="gender" choices={[
            {id: 'MALE', name: 'Male'},
            {id: 'FEMALE', name: 'Female'},
            {id: 'NON_BINARY', name: 'Non Binary'},
            {id: 'UNKNOWN', name: 'Unknown'},
        ]}/>
    </Filter>
);


export const ActivitiesList = () => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    return (
        <List
            filters={<ActivitiesFilter/>}
            perPage={25}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.id}
                    secondaryText={(record) => record.created}
                    tertiaryText={(record) => record.reportCount}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id"/>
                    <DateField source="created" showTime/>
                    <TextField source="description" sortable={false}/>
                    <UrlField source="link"/>
                    <FunctionField label="Location" render={(record: any) => (record.location && `${record.location.firstTitle} ${record.location.secondTitle || ""}`)}/>
                    <TextField source="reportCount"/>
                    <TextField source="onlineLocation" sortable={false}/>
                </Datagrid>
            )}
        </List>
    );
};