import {useMediaQuery} from "@mui/material";
import {ReactNode} from "react";
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
    FunctionField,
    TopToolbar,
    SelectColumnsButton,
    FilterButton,
    ExportButton,
    DatagridConfigurable,
} from "react-admin";


const ActivitiesFilters = [
    <TextInput label="Поиск по ID и описанию" source="query" alwaysOn/>,
    <DateInput label="Создано ПОСЛЕ" source="createdAfter"/>,
    <DateInput label="Создано ДО" source="createdBefore"/>,
    <NumberInput label="Поиск по ID" source="userId"/>,
    <TextInput label="Поиск по месту" source="location"/>,
]

const PostListActions = () => (
    <TopToolbar>
        <FilterButton filters={ActivitiesFilters}/>
        <SelectColumnsButton/>
        <ExportButton/>
    </TopToolbar>
);


export const ActivitiesList = () => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    return (
        <List
            filters={ActivitiesFilters}
            perPage={25}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.id}
                    secondaryText={(record) => record.created}
                    tertiaryText={(record) => record.reportCount}
                />
            ) : (
                <Datagrid rowClick="show"
                                      bulkActionButtons={false}
                                      sx={{
                                          '& .column-description':
                                              {
                                                  wordBreak: "break-word"
                                              }
                                      }}
                >
                    <TextField source="id"/>
                    <DateField source="created" showTime/>
                    <TextField source="description" sortable={false}/>
                    <UrlField source="link"/>
                    <FunctionField label="Location"
                                   render={(record: any) => (record.location && `${record.location.firstTitle} ${record.location.secondTitle || ""}`)}
                    />
                    <TextField source="reportCount"/>
                    <TextField source="onlineLocation" sortable={false}/>
                </Datagrid>
            )}
        </List>
    );
};