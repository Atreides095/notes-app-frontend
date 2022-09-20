import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { MdSort, MdAdd, MdOutlineSearch } from 'react-icons/md';

const NoteSelectionArea = () => {
    return (
        <Box
            w={72}
            h="full"
            borderInlineEnd="2px solid"
            borderInlineEndColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <VStack
                px={4}
                borderBlockEnd="2px solid"
                borderBlockEndColor={useColorModeValue('gray.200', 'gray.900')}
                pt={2}
                pb={6}
                spacing={3}
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="full"
                >
                    <Heading as="h2" size="sm" lineHeight={1}>
                        Credentials
                    </Heading>
                    <Box>
                        <IconButton
                            icon={<MdSort />}
                            rounded="full"
                            bg="transparent"
                            border="2px solid"
                            borderColor={useColorModeValue(
                                'gray.200',
                                'gray.600'
                            )}
                            fontSize="lg"
                            size="sm"
                            mr={2}
                        />
                        <IconButton
                            icon={<MdAdd />}
                            rounded="full"
                            bg="cyan.600"
                            color="white"
                            border="2px solid"
                            borderColor={useColorModeValue(
                                'gray.200',
                                'gray.600'
                            )}
                            fontSize="lg"
                            size="sm"
                        />
                    </Box>
                </Flex>
                <InputGroup size="sm">
                    <InputLeftElement>
                        <Icon as={MdOutlineSearch} />
                    </InputLeftElement>
                    <Input
                        rounded="full"
                        variant="outline"
                        border="2px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        placeholder="Search"
                    />
                </InputGroup>
            </VStack>
        </Box>
    );
};

export default NoteSelectionArea;
