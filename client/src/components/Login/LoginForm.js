import { Component } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <Box maxWidth={700}>
                <form>
                    <Box mb={30}>
                    <Text>Username</Text>
                    <Input></Input>
                    </Box>
                    <Box mb={30}>
                    <Text>Password</Text>
                    <Input mb={3}></Input>
                    <span>Don't have an account? <Link to="/register"><Text color="#4FD1C9" _hover={{"color": "teal.100"}}>Register</Text></Link></span>
                    </Box>
                    <Button bg="teal.300" fontSize={30} padding={6} border="1px" borderRadius="15" _hover={{ color: "teal.300", bg: "white" }}>
                        Login
                    </Button>
                </form>
            </Box>
        )
    }
}
export default LoginForm;