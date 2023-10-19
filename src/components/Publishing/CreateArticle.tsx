import React from "react";
import { Grid, Card, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import TextEditor from "./TextEditor";

const CreateArticle = () => {
    return(
        <Card>
            <form>
            <Grid container sx={{p:5}} spacing={2}>
                <Grid item xs={12}>
                    <TextField variant="standard" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextEditor/>
                </Grid>
                <Grid item xs={12} justifyContent="flex-end">
                    <Grid container justifyContent={'flex-end'}>
                        <Button variant="contained">
                            Publish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </Card>
    )
}
export default CreateArticle;