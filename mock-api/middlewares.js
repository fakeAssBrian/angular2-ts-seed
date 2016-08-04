export function timestampMiddleware(req, res, next) {
  if (
    req.method === 'PUT' ||
    req.method === 'POST' ||
    req.method === 'PATCH'
  ) {
    Object.assign(req.body, { updatedAt: new Date() });
  }

  next()
}

export function authMiddleware(req, res, next) {
  console.log('auth');
  if (true) {
    next();
  } else {
    res.sendStatus(401);
  }
}
