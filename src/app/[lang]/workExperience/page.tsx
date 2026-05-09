import dynamic from 'next/dynamic';

import { MyStack } from '@/components/MyStack/MyStack';
const Form = dynamic(() => import('@/components/Form/Form'));

export default async function Page({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params;
    return (
        <>
            <MyStack />
            <Form />
        </>
    );
}
