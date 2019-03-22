const Wmsg = require('../models/wmsg');

module.exports = {
    async index(req, res){
        const wmsg = await Wmsg.find({}).sort('-createdAt')

        return res.json(wmsg);
    },

    async store(req, res){
        const wmsg = await Wmsg.create(req.body);

        req.io.emit('wmsg', wmsg);

        return res.json(wmsg);
    }
};