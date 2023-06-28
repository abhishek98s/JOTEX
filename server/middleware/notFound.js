const notFoundMiddleware = (req, res, next) => {
    res.status(404).send('Route does note exist')
    next()
}

export default notFoundMiddleware;