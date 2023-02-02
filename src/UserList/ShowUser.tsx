import { useParams } from 'react-router-dom';
import {
    useGetOne,
    useGetList,
    useRedirect,
    Title,
    Loading,
    useListContext,
    useGetMany,
    useRecordContext
} from 'react-admin';
import { Card, Stack, Typography } from '@mui/material';

/**
 * Fetch a book from the API and display it
 */
const ShowUser = () => {
    const { id } = useParams(); // this component is rendered in the /books/:id path
    const redirect = useRedirect();
    const { data, isLoading } = useGetOne(
        '/admin/user/list',
        { id },
        // redirect to the list if the book is not found
        { onError: () => redirect('/admin/user/list') }
    );

    if (isLoading) { return <Loading />; }
    return (
        <div>
            <Title title="Book Show"/>
            <Card>
                <Stack spacing={1}>
                    <div>
                        <Typography variant="caption" display="block">Name</Typography>
                        <Typography variant="body2">{data.nickname}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption" display="block">Publication Date</Typography>
                        <Typography variant="body2">{new Date(data.published_at).toDateString()}</Typography>
                    </div>
                </Stack>
            </Card>
        </div>
    );
};

export default ShowUser