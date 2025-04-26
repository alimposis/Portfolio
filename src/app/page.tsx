import dynamic from 'next/dynamic';

import { MainScreen } from '@/components/MainScreen/MainScreen';
const LocationSection = dynamic(() => import('@/components/LocationSection/LocationSection'));
const Form = dynamic(() => import('@/components/Form/Form'));

export default function Home() {
    return (
        <>
            <MainScreen />
            <LocationSection />
            <Form />
        </>
    );
}
