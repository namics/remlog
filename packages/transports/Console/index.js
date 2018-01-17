const chalk = require('chalk');
const Transport = require('../Transport');

const TRANSPORT_ID = '@remlog/transports/Console';

class ConsoleTransport extends Transport {
    trace(payload = {}) {
        console.log('tracing payload');
    }
}

ConsoleTransport.id = TRANSPORT_ID;

exports = module.exports = ConsoleTransport;
