const db = require('../models')

exports.getStatisticalUsersSerrvice = async () => {
    try {
        const results = await db.sequelize.query('CALL statistical_users()', {
            type: db.Sequelize.QueryTypes.RAW,
        });
        return results
    } catch (error) {
        throw new Error(`${error}, traceback getStatisticalUsersSerrvice()`)
    }
}


exports.getStatisticalRegisterSerrvice = async () => {
    try {
        const results = await db.sequelize.query('CALL statistical_register()', {
            type: db.Sequelize.QueryTypes.RAW,
        });
        return results
    } catch (error) {
        throw new Error(`${error}, traceback getStatisticalRegisterSerrvice()`)
    }
}

exports.getStatisticalTurnSerrvice = async () => {
    try {
        const results = await db.sequelize.query('CALL statistical_turn()', {
            type: db.Sequelize.QueryTypes.RAW,
        });
        return results
    } catch (error) {
        throw new Error(`${error}, traceback getStatisticalTurnSerrvice()`)
    }
}

exports.getStatisticalSumTurnSerrvice = async () => {
    try {
        const results = await db.sequelize.query('CALL statistical_sum_turn()', {
            type: db.Sequelize.QueryTypes.RAW,
        });
        return results
    } catch (error) {
        throw new Error(`${error}, traceback getStatisticalSumTurnSerrvice()`)
    }
}

exports.getStatisticalSumRegisterSerrvice = async () => {
    try {
        const results = await db.sequelize.query('CALL statistical_sum_register()', {
            type: db.Sequelize.QueryTypes.RAW,
        });
        return results
    } catch (error) {
        throw new Error(`${error}, traceback getStatisticalSumRegisterSerrvice()`)
    }
}