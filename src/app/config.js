const PORT = process.env.PORT;
const IP = process.env.IP;

export const API_URL = process.env.NODE_ENV === 'production' ? 'localhost:3000' : `http://${IP}:${PORT}`;
