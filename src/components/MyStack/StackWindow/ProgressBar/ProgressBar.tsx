import ProgressBarStyle from './ProgressBar.module.scss';

export const ProgressBar = ({ progress }: { progress: string }) => {
    return (
        <>
            <p>Progress:</p>
            <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                className={ProgressBarStyle.progressbar}
            >
                <span
                    className={ProgressBarStyle.progressbar__span}
                    style={{ width: progress }}
                ></span>
            </div>
        </>
    );
};
