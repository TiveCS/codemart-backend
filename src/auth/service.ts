import { connection } from '../database/connection';
import bcrypt from 'bcrypt';

export const AuthService = {
  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query(
      'INSERT INTO users(email, password) VALUES(?, ?)',
      [email, hashedPassword],
      (err, rows) => {
        if (err) throw err;

        return rows;
      },
    );
  },
};
