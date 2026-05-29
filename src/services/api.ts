import type { IActionState } from '@/models';

import axios from 'axios';

export async function formOnSubmit(
    prevState: IActionState,
    formData: FormData,
): Promise<IActionState> {
    const tel = formData.get('tel');
    const tg = formData.get('tg');
    const email = formData.get('email');
    const message = formData.get('message');

    const text = `
        Сообщение с портфолио
        tel: ${tel || 'не указанно'}
        tg: ${tg || 'не указанно'}
        email: ${email || 'не указанно'}
        message: ${message}
    `;

    try {
        await axios.post('/api/posts', { text });
        return { data: 'Письмо успешно отправилось', error: null };
    } catch {
        return { data: null, error: 'Возникла ошибка, письмо не отправилось' };
    }
}
