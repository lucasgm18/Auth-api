const users = require('./users');
const { generateToken, verifyToken } = require('../utils/jwt');

exports.login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)){
        return res.status(401).json({ message: 'Credenciais inválidas' });

    }

    const token = generateToken({ id: user.id, username: user.username })

    res.json({ token });

};

exports.protected = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token ausente'});
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(403).json({ message: 'Token inválido ou expirado'}); 
    }
    res.json({ message: 'Bem-vindo, ${decoded.username}'});
};