import { Grid, Card, Button, TextField, FormControl } from "@mui/material";
import { useForm, SubmitHandler,Controller} from "react-hook-form";
import TextEditor from "./TextEditor";
import { useAuth } from "../../../firebase/firebaseAuth";
import { createBlogPost } from "../../../api/post";
import { useNavigate } from "react-router-dom";
interface IFormInput {
    title: string;
    url: string;
    articleBody: string;
  }

const CreateArticle = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const {user} = useAuth();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        const token = await user?.getIdToken();
        try{
            createBlogPost(data.title,data.url,data.articleBody,token);
            navigate('/admin');
        } catch(e) {
            console.error(e);
        }
    };

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
                        defaultValue=""
                        rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                        render={({ field }) =>
                            <FormControl fullWidth>
                                <TextField label='Photo Link' variant="outlined" fullWidth {...field} />                
                            </FormControl>
                        }
                        name="url"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
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
                        rules={{ required: true }}
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
                