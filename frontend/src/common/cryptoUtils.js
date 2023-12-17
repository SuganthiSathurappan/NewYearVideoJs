// cryptoUtils.js
import CryptoJS from 'crypto-js';

const secretKey = 'NewYear';

export const encrypt = (text) => {
  const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
  // URL encode the encrypted data
  const encryptedUrlEncoded = encodeURIComponent(encrypted);
  return encryptedUrlEncoded;
};

export const decrypt = (cipherText) => {
  // URL decode before decrypting
  const decryptedUrlDecoded = decodeURIComponent(cipherText);
  const bytes = CryptoJS.AES.decrypt(decryptedUrlDecoded, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};