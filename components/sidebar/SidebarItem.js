import {
    Box,
    Flex,
    Icon,
    Spacer,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const SidebarSectionItem = ({ text, indentLevel, icon, count, isActive }) => {
    const colors = {
        iconColor: useColorModeValue('blackAlpha.700', 'gray.400'),
        iconColorActive: useColorModeValue('cyan.600', 'cyan.600'),
        countColor: useColorModeValue('blackAlpha.500', 'whiteAlpha.500'),
        activeBg: useColorModeValue('white', 'gray.900'),
    };

    return (
        <Flex
            px={4}
            py={1}
            align="center"
            gap={0}
            w="full"
            lineHeight="1"
            cursor="pointer"
            bg={isActive ? colors.activeBg : 'transparent'}
            _hover={{
                bg: colors.activeBg,
            }}
        >
            {indentLevel >= 1 &&
                [...Array(indentLevel)].map((level, i) => (
                    <Box key={i} boxSize={5} />
                ))}
            {icon && (
                <Icon
                    as={icon}
                    boxSize={5}
                    mr={2}
                    color={isActive ? colors.iconColorActive : colors.iconColor}
                />
            )}
            <Text>{text}</Text>
            <Spacer />
            {count && (
                <Text
                    color={colors.countColor}
                    fontWeight={isActive ? 900 : 400}
                >
                    {count}
                </Text>
            )}
        </Flex>
    );
};

export default SidebarSectionItem;

SidebarSectionItem.defaultProps = {
    text: 'please add a name',
    indentLevel: 0,
    icon: null,
    count: null,
};
