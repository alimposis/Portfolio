import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { text }: { text: string } = await req.json();
    try {
        await axios.post(
            `${process.env.TELEGRAMM_API}`,
            {
                chat_id: process.env.TELEGRAMM_BOT_CHAT_ID,
                text,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        return NextResponse.json({ message: 'Успешно отправлено!' }, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'Ошибка при отправке в Telegram' }, { status: 500 });
    }
}
