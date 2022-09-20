import {
    Avatar,
    Box,
    Flex,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    MdOutlineDescription,
    MdOutlineCode,
    MdOutlineListAlt,
    MdOutlineFolder,
    MdOutlineTag,
    MdOutlineStarOutline,
    MdLightMode,
    MdDarkMode,
    MdOutlineSettings,
} from 'react-icons/md';
import SidebarSectionItem from './SidebarItem';

const Sidebar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <VStack
            flexShrink={0}
            h="100%"
            spacing={0}
            bg={useColorModeValue('gray.100', 'gray.700')}
            w={60}
            borderInlineEnd="2px solid"
            borderInlineEndColor={useColorModeValue('gray.200', 'gray.900')}
            fontFamily="'Roboto', sans-serif"
            fontSize="sm"
        >
            <Flex
                w="full"
                direction="column"
                flexGrow={1}
                gap={2}
                overflow="auto"
            >
                <VStack align="start" spacing={0}>
                    <Text fontWeight="700" pt={4} pb={2} px={4}>
                        Categories
                    </Text>
                    <SidebarSectionItem
                        text="Notes"
                        icon={MdOutlineDescription}
                        count={210}
                    />
                    <SidebarSectionItem text="Code" icon={MdOutlineCode} />
                    <SidebarSectionItem text="Lists" icon={MdOutlineListAlt} />
                    <SidebarSectionItem
                        text="Bookmarks"
                        icon={MdOutlineStarOutline}
                    />
                </VStack>
                <VStack align="start" spacing={0}>
                    <Text fontWeight="700" py={2} px={4}>
                        Folders
                    </Text>
                    <SidebarSectionItem
                        text="first folder"
                        icon={MdOutlineFolder}
                        indentLevel={1}
                        count={100}
                    />
                    <SidebarSectionItem
                        text="second folder"
                        icon={MdOutlineFolder}
                        indentLevel={1}
                        count={60}
                    />

                    <SidebarSectionItem
                        text="third folder"
                        icon={MdOutlineFolder}
                        indentLevel={1}
                        count={30}
                    />
                    <SidebarSectionItem
                        text="fourth folder"
                        icon={MdOutlineFolder}
                        indentLevel={1}
                        count={100}
                    />
                    <SidebarSectionItem
                        text="fifth folder"
                        icon={MdOutlineFolder}
                        indentLevel={1}
                        count={100}
                    />
                </VStack>
                <VStack align="start" spacing={0}>
                    <Text fontWeight="700" py={2} px={4}>
                        Tags
                    </Text>
                    <SidebarSectionItem
                        text="first tag"
                        icon={MdOutlineTag}
                        indentLevel={1}
                        count={100}
                    />
                    <SidebarSectionItem
                        text="second tag"
                        icon={MdOutlineTag}
                        indentLevel={1}
                        count={2}
                        isActive
                    />
                    <SidebarSectionItem
                        text="third tag"
                        icon={MdOutlineTag}
                        indentLevel={1}
                        count={4}
                    />
                    <SidebarSectionItem
                        text="fourth tag"
                        icon={MdOutlineTag}
                        indentLevel={1}
                        count={100}
                    />
                    <SidebarSectionItem
                        text="fifth tag"
                        icon={MdOutlineTag}
                        indentLevel={1}
                        count={100}
                    />
                </VStack>
            </Flex>
            <Flex w="full" h="max-content" px={4} py={2} gap={2}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    as="button"
                    boxSize={5}
                    bg="transparent"
                    rounded="full"
                    color="gray.900"
                    fontSize="1.5rem"
                >
                    <Avatar
                        color={useColorModeValue('gray.900', 'white')}
                        boxSize={5}
                        bg={useColorModeValue('white', 'gray.900')}
                    />
                </Box>
                <Menu>
                    <MenuButton
                        p={0}
                        as={IconButton}
                        icon={<MdOutlineSettings />}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxSize={5}
                        bg="transparent"
                        rounded="full"
                        color={useColorModeValue('gray.900', 'white')}
                        fontSize="1.25rem"
                        minW="max-content"
                    />
                    <MenuList boxShadow="lg">
                        <MenuItem onClick={toggleColorMode}>
                            <span>
                                <Icon
                                    as={
                                        colorMode === 'light'
                                            ? MdDarkMode
                                            : MdLightMode
                                    }
                                    verticalAlign="middle"
                                    fontSize="md"
                                />
                            </span>
                            &nbsp; &nbsp;
                            {colorMode === ' light'
                                ? 'Dark Mode'
                                : 'Light Mode'}
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </VStack>
    );
};

export default Sidebar;
