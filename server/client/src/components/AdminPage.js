import Users from './Users'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AdminPage = () => {
    return (
        <Container
        sx={{
            mt: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        }}
        >
            <Typography variant="h3">App users</Typography>
            
                
                <Users/>
            
            
        </Container>
    )
}

export default AdminPage