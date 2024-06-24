import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Input,
    Stack,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Spinner,
    Text,
    Link,
} from '@chakra-ui/react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleLogin = () => {
        let validationErrors = {};

        if (name !== 'Guilherme') {
            validationErrors.name = 'Usuário não cadastrado!';
        }

        if (!validateEmail(email)) {
            validationErrors.email = 'Formato de e-mail inválido!';
        } else if (email !== 'guilhermegaffuri@gmail.com') {
            validationErrors.email = 'Usuário não cadastrado!';
        }

        if (!validatePassword(password)) {
            validationErrors.password = 'A senha deve conter pelo menos 8 dígitos!';
        } else if (password !== '12345678') {
            validationErrors.password = 'Usuário não cadastrado!';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true);

            setTimeout(() => {
                navigate('/home');
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <Box
            className="login-page"
            bg="url(https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg)"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100vw"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Container bg="rgba(0, 0, 0, 0.75)" borderRadius="10px" textAlign="center" w="300px" p="20px" color="white">
                <Heading mb="30px" fontSize="50px">Login</Heading>
                <Stack spacing="20px">
                    <FormControl id="name" isInvalid={errors.name}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            _placeholder={{ color: 'gray.300' }}
                            color="white"
                        />
                        {errors.name && <Text mt="2" fontSize="sm" color="white">{errors.name}</Text>}
                    </FormControl>
                    <FormControl id="email" isInvalid={errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            _placeholder={{ color: 'gray.300' }}
                            color="white"
                        />
                        {errors.email && <Text mt="2" fontSize="sm" color="white">{errors.email}</Text>}
                    </FormControl>
                    <FormControl id="senha" isInvalid={errors.password}>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            _placeholder={{ color: 'gray.300' }}
                            color="white"
                        />
                        {errors.password && <Text mt="2" fontSize="sm" color="white">{errors.password}</Text>}
                    </FormControl>
                </Stack>
                <Stack mt="20px" spacing="15px">
                    {!loading ? (
                        <Button
                            bg="red.600"
                            color="white"
                            _hover={{ bg: 'red.700' }}
                            borderRadius="5px"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    ) : (
                        <Spinner size="md" color="white" />
                    )}
                    <Link as={RouterLink} to="/cadastro" style={{ textDecoration: 'none' }}>
                        <Button
                            bg="gray.600"
                            color="white"
                            _hover={{ bg: 'gray.700' }}
                            borderRadius="5px"
                        >
                            Cadastro
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Login;
