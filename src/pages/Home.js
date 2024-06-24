import React from 'react';
import { Box, Flex, Link, Text, Image, Icon, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPlay } from 'react-icons/fa';

const Home = () => {
    return (
        <Box bg="black" minH="100vh">
            {/* Header com imagem de fundo */}
            <Box
                as="header"
                backgroundImage="url('https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg')"
                height="80px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px="20px"
                backgroundSize="cover"
                backgroundPosition="center"
                boxShadow="md"
            >
                {/* Container do logo */}
                <Box className="logo-container">
                    <img
                        src="https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-redondo-cinema-pipoca-6532819f0ebea.png"
                        alt="Painel Redondo Cinema Pipoca"
                        className="logo"
                        width="70px"
                        height="auto"
                    />
                </Box>
                {/* Links de navegação */}
                <Flex className="nav-links">
                    <Link
                        as={RouterLink}
                        to="/"
                        className="nav-link"
                        textDecoration="none"
                        color="white"
                        px="15px"
                        py="8px"
                        borderRadius="5px"
                        display="flex"
                        alignItems="center"
                        _hover={{ bgColor: '#be042c' }}
                    >
                        <Icon as={FaHome} mr="5px" />
                        Home
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/list"
                        className="nav-link"
                        textDecoration="none"
                        color="white"
                        px="15px"
                        py="8px"
                        borderRadius="5px"
                        display="flex"
                        alignItems="center"
                        _hover={{ bgColor: '#be042c' }}
                    >
                        <Icon as={FaPlay} mr="5px" />
                        Assistir
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/about"
                        className="nav-link"
                        textDecoration="none"
                        color="white"
                        px="15px"
                        py="8px"
                        borderRadius="5px"
                        display="flex"
                        alignItems="center"
                        _hover={{ bgColor: '#be042c' }}
                    >
                        <Icon as={FaInfoCircle} mr="5px" />
                        Sobre
                    </Link>
                </Flex>
            </Box>

            {/* Conteúdo principal */}
            <Box mt="20px" p="20px" textAlign="center" color="white">
                {/* Título */}
                <Text fontSize="4xl" fontWeight="bold" mb="10px">
                    Bem-vindo ao Portal Rick and Morty!
                </Text>
                {/* Descrição */}
                <Text mb="20px" fontSize="2xl">
                    Explore o universo de Rick and Morty através de um novo olhar.
                </Text>
                {/* Imagem principal */}
                <Box maxW="800px" mx="auto" borderRadius="15px" overflow="hidden" boxShadow="xl">
                    <Image
                        src="https://rollingstone.uol.com.br/media/_versions/rick-morty-temporada-4_widemd.jpg"
                        alt="Rick and Morty"
                        width="100%"
                        height="auto"
                    />
                </Box>
                {/* Botão para assistir trailer no YouTube */}
                <Button
                    as={Link}
                    href="https://www.youtube.com/results?search_query=rick+and+morty+trailer"
                    colorScheme="red"
                    mt="10px"
                    leftIcon={<FaPlay />}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Assista ao Trailer
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
