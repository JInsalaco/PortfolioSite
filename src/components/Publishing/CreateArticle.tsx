import { Grid, Card, Button, TextField, FormControl } from "@mui/material";
import { useForm, SubmitHandler,Controller} from "react-hook-form";
import TextEditor from "./TextEditor";

interface IFormInput {
    title: string;
    articleBody: string;
  }

const CreateArticle = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return(
        <Card sx={{p:2}}>
            <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} justifyContent='flex-start'>
                    <Grid item xs={12}>
                        <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='Title' variant="outlined" fullWidth {...field} />                
                            </FormControl>
                        }
                        name="title"
                        control={control}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                        render={({field})=>
                            <FormControl fullWidth>
                                <TextEditor 
                                articleBody={field.value} 
                                onChange={field.onChange}
                                />
                            </FormControl>
                        }
                        name='articleBody'
                        control={control}
                        /> 
                    </Grid>
                    <Grid item xs={12}>
                        <Button sx={{float: 'right'}} type='submit' variant="contained" >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}
export default CreateArticle;
                