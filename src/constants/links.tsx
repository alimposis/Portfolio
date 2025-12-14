import { ReactComponent as TelegramSVG } from '@/components/icons/telegram.svg';
import { ReactComponent as HHSVG } from '@/components/icons/hh.svg';
import { ReactComponent as GitHubSVG } from '@/components/icons/github.svg';
import { ReactComponent as LinkedinSVG } from '@/components/icons/linkedin.svg';
import { ReactComponent as GmailSVG } from '@/components/icons/gmail.svg';

export const links = [
    {
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=alimpostea@gmail.com',
        Icon: <GmailSVG />,
    },
    { href: 'https://t.me/Alimpoz', Icon: <TelegramSVG /> },
    {
        href: 'https://rabota.by/resume/f0d3fcfcff0df1cfe40039ed1f514870617056',
        Icon: <HHSVG />,
    },
    { href: 'https://github.com/alimposis', Icon: <GitHubSVG /> },
    { href: 'https://www.linkedin.com/in/водяников-ярослав-7531212ba', Icon: <LinkedinSVG /> },
] as const;
