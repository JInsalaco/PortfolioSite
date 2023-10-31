import { Container, Card } from "@mui/material";
import Login from "./Login/Login";
import Logout from "./Login/Logout";
import { useAuth } from "../../firebase/firebaseAuth"

const LoginContainer = () => {
    const { user } = useAuth();
    return(
        <Container>
            <Card sx={{p:2}}>
                {user? <Logout/> : <Login/>}
            </Card>
        </Container>
    )
}

export default LoginContainer;