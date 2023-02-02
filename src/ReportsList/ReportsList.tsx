import React, {Fragment, useCallback} from 'react';
import {
    Count,
    DateField,
    List,
    NumberField,
    TextField,
    useListContext,
    Datagrid,
    TextInput,
    Filter,
    SearchInput,
    NumberInput
} from 'react-admin';

import {useMediaQuery, Divider, Tabs, Tab, Theme} from '@mui/material';

const ReportList = () => (
    <List
        // filters={<ReportFilter/>}
        filterDefaultValues={{status: 'userReports'}}
        perPage={25}
    >
        <TabbedDatagrid/>
    </List>
);

const ReportFilter = () => (
    <Filter variant="black">
        <NumberInput label="Поиск по ID" source="id" alwaysOn/>
    </Filter>
)
const orderFilters = [
    <SearchInput source="id"/>,
]

const tabs = [
    {id: 'userReports', name: 'Жалобы на пользователя'},
    {id: 'activityReports', name: 'Жалобы  на активность'},
    {id: 'commentReports', name: 'Жалобы на комментарий'},
];

const TabbedDatagrid = () => {
    const listContext = useListContext();
    const {filterValues, setFilters, displayedFilters} = listContext;
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );

    const handleChange = useCallback(
        (event: React.ChangeEvent<{}>, value: any) => {
            setFilters &&
            setFilters(
                {...filterValues, status: value},
                displayedFilters,
                false // no debounce, we want the filter to fire immediately
            );
        },
        [displayedFilters, filterValues, setFilters]
    );

    return (
        <Fragment>
            <Tabs
                variant="fullWidth"
                centered
                value={filterValues.status}
                indicatorColor="primary"
                onChange={handleChange}
            >
                {tabs.map(choice => (
                    <Tab
                        key={choice.id}
                        label={
                            <span>
                                {choice.name} (
                                <Count
                                    filter={{
                                        ...filterValues,
                                        status: choice.id,
                                    }}
                                    sx={{lineHeight: 'inherit'}}
                                />
                                )
                            </span>
                        }
                        value={choice.id}
                    />
                ))}
            </Tabs>
            <Divider/>
            <>
                {filterValues.status === 'userReports' && (
                    <Datagrid>

                        <DateField source="date" showTime sortable={false}/>
                        <TextField source="nickname" sortable={false}/>
                        <TextField source="offense" sortable={false}/>
                        <NumberField source="reporter" sortable={false}/>
                        <NumberField source="target" sortable={false}/>
                    </Datagrid>
                )}
                {filterValues.status === 'activityReports' && (
                    <>
                        <ReportFilter/>
                        <Datagrid>
                            <NumberField source="activityId" sortable={false}/>
                            <DateField source="date" showTime sortable={false}/>
                            <TextField source="offense" sortable={false}/>
                            <TextField source="title" sortable={false}/>
                            <NumberField source="userId" sortable={false}/>
                        </Datagrid>
                    </>
                )}
                {filterValues.status === 'commentReports' && (
                    <Datagrid>
                        <NumberField source="commentId" sortable={false}/>
                        <DateField source="date" showTime sortable={false}/>
                        <TextField source="nickname" sortable={false}/>
                        <TextField source="offense" sortable={false}/>
                        <NumberField source="userId" sortable={false}/>
                    </Datagrid>
                )}
            </>
        </Fragment>
    );
}
;

export default ReportList;

