import { useState } from "react";
import { useForm, SubmitHandler, Controller} from "react-hook-form";
import { Button, TextField, FormControl, Grid, Typography, FormHelperText } from "@mui/material";
import { useAuth } from "../../../firebase/firebaseAuth"
import { getAuth } from "firebase/auth";

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const { signIn } = useAuth();
    const { control, handleSubmit } = useForm<IFormInput>();
    const [error,setError] = useState<boolean>(false);
    
    const onSubmit: SubmitHandler<IFormInput> = async(data,event) => {
        event?.preventDefault();
        setError(false);
        try {
            await signIn(data.email, data.password);
        } catch {
            setError(true);
        }
    }

    return(
        <form autoComplete="true" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" sx={{fontSize: '2rem'}}>Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='email' variant="outlined" fullWidth error={error} {...field} />                
                            </FormControl>
                        }
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='password' variant="outlined" fullWidth type='password' error={error} {...field} />                
                            </FormControl>
                        }
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                </Grid>
                {error && <Grid item xs={12}>
                    <FormHelperText error={error}>Invalid username or password</FormHelperText>
                </Grid>}
                <Grid item xs={12}>
                    <Button type='submit' variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login;