// src/pages/index.tsx
import type { NextPage } from 'next';
import Banner from '@/components/Banner';
import Options from '@/components/Options'

const Home: NextPage = () => {
    return (
        <div>
            <Banner />
            <Options />
        </div>
    );
};

export default Home;
