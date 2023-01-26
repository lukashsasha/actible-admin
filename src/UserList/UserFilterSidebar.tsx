import { FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import WcIcon from '@mui/icons-material/Wc';


export const UserFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
        <CardContent>
                <FilterList label="Category" icon={<WcIcon />}>
                    <FilterListItem label="MALE" value={{ gender: 'MALE' }} />
                    <FilterListItem label="FEMALE" value={{ gender: 'FEMALE' }} />
                    <FilterListItem label="UNKNOWN" value={{ gender: 'UNKNOWN' }} />
                    <FilterListItem label="NON_BINARY" value={{ gender: 'NON_BINARY' }} />
                </FilterList>
        </CardContent>
    </Card>
);