import { useForm, SubmitHandler, Controller} from "react-hook-form";
import { Button, TextField, FormControl, Grid, Typography } from "@mui/material";
import { useAuth } from "../../../firebase/firebaseAuth"

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const { signIn } = useAuth();
    const { control, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            await signIn(data.email, data.password);
        } catch(e) {
            console.error(e);
        }
    }

    return(
        <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" sx={{fontSize: '2rem'}}>Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='email' variant="outlined" fullWidth {...field} />                
                            </FormControl>
                        }
                        name="email"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='password' variant="outlined" fullWidth type='password' {...field} />                
                            </FormControl>
                        }
                        name="password"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login;