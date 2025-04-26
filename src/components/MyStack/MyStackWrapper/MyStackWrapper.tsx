import { IListStack } from '@/models';
import { StackWindow } from '../StackWindow/StackWindow';
import axios from 'axios';

export const MyStackWrapper = async () => {
    const stackData: IListStack[] | undefined = await axios
        .get(`${process.env.STACK_API}`)
        .then(e => {
            return e.data;
        });
    return (
        <>
            <div className="wrapper">
                {stackData &&
                    stackData.map(e => {
                        return (
                            <StackWindow
                                key={e.id}
                                id={e.id}
                                description={e.description}
                                name={e.name}
                                time={e.time}
                                progress={e.progress}
                            />
                        );
                    })}
            </div>
        </>
    );
};
