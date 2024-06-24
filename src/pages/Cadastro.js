import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Input,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Text,
} from '@chakra-ui/react';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleCadastroClick = () => {
        // Validações
        let validationErrors = {};
        if (!name) {
            validationErrors.name = 'Por favor, preencha o nome.';
        }

        if (!email) {
            validationErrors.email = 'Por favor, preencha o e-mail.';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Formato de e-mail inválido.';
        }

        if (!password) {
            validationErrors.password = 'Por favor, preencha a senha.';
        } else if (!validatePassword(password)) {
            validationErrors.password = 'A senha deve conter pelo menos 8 dígitos.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Salva o usuário no localStorage
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        alert('Usuário cadastrado com sucesso!');

        // Reseta os campos após o cadastro
        setName('');
        setEmail('');
        setPassword('');
        setErrors({});

        // Redireciona para a página inicial
        navigate('/');
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
            <Container
                bg="rgba(0, 0, 0, 0.75)"
                borderRadius="10px"
                textAlign="center"
                w="300px"
                p="20px"
                color="white"
            >
                <Heading className="login" mb="30px" fontSize="30px">Cadastro Novo Usuário</Heading>
                <FormControl id="name" isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Name"
                        _placeholder={{ color: 'gray.300' }}
                        color="white"
                    />
                    {errors.name && <Text mt="2" fontSize="sm" color="red.500">{errors.name}</Text>}
                </FormControl>
                <FormControl id="email" mt="20px" isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="E-mail"
                        _placeholder={{ color: 'gray.300' }}
                        color="white"
                    />
                    {errors.email && <Text mt="2" fontSize="sm" color="red.500">{errors.email}</Text>}
                </FormControl>
                <FormControl id="senha" mt="20px" isInvalid={errors.password}>
                    <FormLabel>Senha</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Senha"
                        _placeholder={{ color: 'gray.300' }}
                        color="white"
                    />
                    {errors.password && <Text mt="2" fontSize="sm" color="red.500">{errors.password}</Text>}
                </FormControl>
                <Button
                    className="botao"
                    mt="20px"
                    onClick={handleCadastroClick}
                    bg="red.600"
                    color="white"
                    _hover={{ bg: 'red.700' }}
                    borderRadius="5px"
                    width="80px"
                    height="50px"
                >
                    Cadastro
                </Button>
            </Container>
        </Box>
    );
};

export default Cadastro;
