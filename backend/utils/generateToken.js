import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days, untuk menghapus cookie, kita bisa set maxAge ke 0
    httpOnly: true, // agar cookie tidak bisa diakses menggunakan javascript seperti cross-site scripting attacks
    sameSite: 'strict', // cookie hanya akan dikirim dalam konteks yang sama, CRFS attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== 'development',
  });
};

export default generateTokenAndSetCookie;
