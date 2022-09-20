import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('white', 'gray.800')(props),
        },
    }),
};

const fonts = {
    heading: "'Roboto', sans-serif",
};

const theme = extendTheme({ styles, fonts });

export default theme;
