// src/pages/index.tsx
import type { NextPage } from 'next';
import Banner from '@/components/Banner';
import Options from '@/components/Options'
import Catalog from '@/components/Catalog';

const Home: NextPage = () => {
    return (
        <div>
            <Banner />
            <Options />
            <Catalog />
        </div>
    );
};

export default Home;
