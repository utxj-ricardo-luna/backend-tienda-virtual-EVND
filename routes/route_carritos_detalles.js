const carritosDetallesController = require('../controllers/controller_carrito_detalle');

module.exports = (app) => {
    app.get('/api/carritos_detalles', carritosDetallesController.list);
    app.get('/api/carritos_detalles/:nombre', carritosDetallesController.find);
    app.post('/api/carritos_detalles', carritosDetallesController.create);
    app.delete('/api/carritos_detalles/:id', carritosDetallesController.delete);
    app.put('/api/carritos_detalles/:id', carritosDetallesController.update);
}