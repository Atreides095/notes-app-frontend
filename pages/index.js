import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import NoteSelectionArea from '../components/NoteSelectionArea.js/NoteSelectionArea';
import Sidebar from '../components/sidebar';

export default function Home() {
    return (
        <Layout>
            <Sidebar />
            <NoteSelectionArea />
        </Layout>
    );
}
