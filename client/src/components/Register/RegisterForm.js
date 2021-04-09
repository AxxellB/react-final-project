import { Component } from "react";
import { Box, Text, Input, FormControl, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { register } from '../../services/data';


class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <Box maxWidth={700}>
                <form onSubmit={register(this.username, this.email, this.password)}>
                    <Box mb={30}>
                    <Text>Username</Text>
                    <Input></Input>
                    </Box>
                    <Box mb={30}>
                    <Text>Email</Text>
                    <Input></Input>
                    </Box>
                    <Box mb={30}>
                    <Text>Password</Text>
                    <Input></Input>
                    </Box>
                    <Box mb={30}>
                    <Text>Confirm Password</Text>
                    <Input mb={3}></Input>
                    <span>Already a member? <Link to="/login"><Text color="#4FD1C9" _hover={{"color": "teal.100"}}>Log In</Text></Link></span>
                    </Box>
                    <Button bg="teal.300" fontSize={30} padding={6} border="1px" borderRadius="15" _hover={{ color: "teal.300", bg: "white" }} type="submit">
                        Register
                    </Button>
                </form>
            </Box>
        )
    }
}

export default RegisterForm;