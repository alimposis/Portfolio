import { IListStack } from '@/models';
import { ProgressBar } from './ProgressBar/ProgressBar';
import StackWindowStyle from './StackWindow.module.scss';

export const StackWindow = ({ name, description, progress, time }: IListStack) => {
    return (
        <>
            <article className={StackWindowStyle.article}>
                <h3>{name}</h3>
                <ProgressBar progress={progress} />
                <p>Work experience: {time}</p>
                <p>{description}</p>
            </article>
        </>
    );
};
