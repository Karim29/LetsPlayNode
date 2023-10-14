
exports.protect = (req) => {
    // Get token from request header
    const token = req.headers.authorization;
    // Check if token is not empty
    if (token === undefined || token.trim() === '') {
        return false;
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, 'onepiece');
        return true;
    } catch (error) {
        return false;
    }

};