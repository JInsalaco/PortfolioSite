import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../../firebase/firebaseAuth"

interface IFormInput {
    email: string;
    password: string;
}

const Logout = () => {
    const { logOut, user } = useAuth();
    const { handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            await logOut();
        } catch(e) {
            console.error(e);
        }
    }

    return (
            <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" sx={{fontSize: '2rem'}}>Hello {user?.email}</Typography>
                    </Grid>
                    <Grid item>
                        <Button to='/admin/publish' component={RouterLink} variant="contained">Write Article</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant="contained">Logout</Button>
                    </Grid>
                </Grid>
            </form>
        
    )
}

export default Logout;