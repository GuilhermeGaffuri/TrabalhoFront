import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
    Box,
    Container,
    Heading,
    Stack,
    Spinner,
    Grid,
    Image,
    Text,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Link as ChakraLink,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Icon,
    Link
} from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Importando useNavigate

import { FaHome, FaList, FaUser, FaInfoCircle } from 'react-icons/fa';
import client from "./apollo";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        status
        species
        origin {
          name
        }
        episode {
          episode
          air_date
        }
      }
    }
  }
`;

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const { loading, error, data } = useQuery(GET_CHARACTERS, { client });
    const navigate = useNavigate(); // Utilizando useNavigate para navegação

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const openCharacterModal = (character) => {
        setSelectedCharacter(character);
    };

    const closeCharacterModal = () => {
        setSelectedCharacter(null);
    };

    const filteredCharacters = data ? data.characters.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const goBack = () => {
        navigate(-1); // Navega para a página anterior
    };

    return (
        <Box bg="black" minH="100vh" py="50px" color="green.500">
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
                <Box className="logo-container">
                    <img
                        src="https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-redondo-cinema-pipoca-6532819f0ebea.png"
                        alt="Painel Redondo Cinema Pipoca"
                        className="logo"
                        width="70px"
                        height="auto"
                    />
                </Box>
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
                        <Icon as={FaList} mr="5px" />
                        List
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/biografia"
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
                        <Icon as={FaUser} mr="5px" />
                        Biografia
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/suporte"
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
                        Suporte
                    </Link>
                </Flex>
            </Box>

            <Container maxW="1200px" borderRadius="10px" boxShadow="lg" p="20px">
                <Heading as="h1" mb="20px" textAlign="center" color="green.500">
                    Personagens de Rick and Morty
                </Heading>
                <Stack mb="20px" direction="row" spacing="10px" justify="center" align="center">
                    <Input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Digite o nome do personagem"
                        w="300px"
                        bg="white"
                        color="black"
                    />
                </Stack>
                {loading ? (
                    <Stack justify="center" align="center" py="50px">
                        <Spinner size="xl" color="green.500" />
                    </Stack>
                ) : error ? (
                    <Text color="red.500" textAlign="center">
                        Erro ao carregar os personagens. Tente novamente mais tarde.
                    </Text>
                ) : (
                    <>
                        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="20px">
                            {filteredCharacters.map(character => (
                                <Card
                                    key={character.id}
                                    bg="gray.800"
                                    boxShadow="md"
                                    borderRadius="8px"
                                    cursor="pointer"
                                    onClick={() => openCharacterModal(character)}
                                >
                                    <CardBody p="0">
                                        <Image src={character.image} alt={character.name} borderRadius="8px 8px 0 0" />
                                        <Stack p="10px" color="green.500">
                                            <Heading as="h2" size="md" mb="5px">
                                                {character.name}
                                            </Heading>
                                            <Text fontSize="sm">Status: {character.status}</Text>
                                            <Text fontSize="sm">Espécie: {character.species}</Text>
                                            <Text fontSize="sm">Origem: {character.origin.name}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter>
                                        <Button size="sm" colorScheme="green" onClick={() => openCharacterModal(character)}>
                                            Ver Mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </Grid>
                    </>
                )}
            </Container>
            <Modal isOpen={selectedCharacter !== null} onClose={closeCharacterModal} size="xl">
                <ModalOverlay />
                <ModalContent bg="gray.900" color="green.500">
                    <ModalHeader>{selectedCharacter?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            src={selectedCharacter?.image}
                            alt={selectedCharacter?.name}
                            borderRadius="8px"
                            mb="20px"
                        />
                        <Text fontSize="lg" fontWeight="bold">
                            Status: {selectedCharacter?.status}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                            Espécie: {selectedCharacter?.species}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                            Origem: {selectedCharacter?.origin.name}
                        </Text>
                        <Text mt="20px" fontSize="lg" fontWeight="bold">
                            Episódios:
                        </Text>
                        {selectedCharacter?.episode.map((ep, index) => (
                            <Box key={index}>
                                <Text>
                                    {ep.episode} - {ep.air_date}
                                </Text>
                            </Box>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={closeCharacterModal}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Button
                position="fixed"
                bottom="20px"
                right="20px"
                colorScheme="green"
                onClick={goBack}
                leftIcon={<Icon as={FaHome} />}
            >
                Voltar
            </Button>
        </Box>
    );
};

export default List;
