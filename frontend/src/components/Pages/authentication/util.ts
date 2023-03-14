import { enc, HmacSHA512 } from 'crypto-js';

export function generatePasswordResetToken(email: string) {
	const now = new Date();
	const fixedValue = now.toISOString().slice(0, 10) + email;
	const message = email + fixedValue;
	const token = enc.Base64.stringify(HmacSHA512(message, fixedValue));
	return token;
}

export function checkPasswordResetToken(email: string, token: string) {
	const now = new Date();
	const fixedValue = now.toISOString().slice(0, 10) + email;
	const message = email + fixedValue;
	const expectedToken = HmacSHA512(message, fixedValue);

	const decodedToken = enc.Base64.parse(token);

	return enc.Base64.stringify(decodedToken) === enc.Base64.stringify(expectedToken);
}
