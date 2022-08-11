const CryptoJS = require("crypto-js");
export const eAES = async (text: string) => {
  const passphrase = process.env.PRIVATE_KEY;
  return await CryptoJS.AES.encrypt(text, passphrase).toString();
};

export const dAES = async (ciphertext: string) => {
  const passphrase = process.env.PRIVATE_KEY;
  const bytes = await CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = await bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
// import crypto from 'crypto';

// const ALGORITHM = 'aes-256-cbc';
// const ENCODING = 'hex';
// const IV_LENGTH = 16;
// const KEY = process.env.ENCRYPTION_KEY!;

// export const encrypt = (data: string) => {
//   const iv = crypto.randomBytes(IV_LENGTH);
//   const cipher = crypto.createCipheriv(ALGORITHM, new Buffer(KEY), iv);
//   return Buffer.concat([cipher.update(data,), cipher.final(), iv]).toString(ENCODING);
// }

// export const decrypt = (data: string) => {
//   const binaryData = new Buffer(data, ENCODING);
//   const iv = binaryData.slice(-IV_LENGTH);
//   const encryptedData = binaryData.slice(0, binaryData.length - IV_LENGTH);
//   const decipher = crypto.createDecipheriv(ALGORITHM, new Buffer(KEY), iv);

//   return Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();
// }
