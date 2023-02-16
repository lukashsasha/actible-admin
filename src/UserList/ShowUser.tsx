import {useParams} from 'react-router-dom';
import {
    useGetOne,
    useGetList,
    useRedirect,
    Title,
    Loading,
    useListContext,
    useGetMany,
    useRecordContext,
    DeleteWithConfirmButton
} from 'react-admin';
import {Card, Stack, Typography, Box, CardContent, Divider, Button} from '@mui/material';


const ShowUser = () => {
    const {id} = useParams();
    const redirect = useRedirect();
    const {data, isLoading} = useGetOne(
        '/admin/user/list',
        {id},
        {onError: () => redirect('/admin/user/list')}
    );

    if (isLoading) {
        return <Loading/>;
    }

    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        mb: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '4px',
        p: 1,
        justifyContent: "space-between",
        flexWrap: "inherit",
        '&:last-child': { fontWeight: 'bold' }
    }

    return (
        <div>
            <Title title={
                <>
                    {"User #"}<span style={{fontWeight: "bold"}}>{data.nickname}</span>
                </>}
            />
            <Card sx={{width: '100%', boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)', borderRadius: '8px'}}>
                <CardContent sx={{
                    width: "50%",
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            ID
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.id}
                        </Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            NICKNAME
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.nickname}
                        </Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            FULL NAME
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.fullName}
                        </Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            GENDER
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.gender}
                        </Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            EMAIL
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.email}
                        </Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography variant="body2" sx={{mr: 1}}>
                            AGE
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.age}
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        disabled={data.activities === 0}
                        color="secondary"
                        sx={{...boxStyle}}
                        href={`/admin/activity/list?displayedFilters=%7B"userId"%3Atrue%7D&filter=%7B"userId"%3A${data.id}%7D&order=ASC&page=1&perPage=25&sort=id`}
                    >
                        <Typography variant="body2" sx={{mr: 1}}>
                            ACTIVITIES
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                            {data.activities}
                        </Typography>
                    </Button>
                    <Divider sx={{my: 2}}/>
                    <DeleteWithConfirmButton record={data}/>
                </CardContent>
            </Card>

        </div>
    );
};

export default ShowUser