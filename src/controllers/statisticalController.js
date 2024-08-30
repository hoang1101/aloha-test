const { getStatisticalUsersSerrvice, getStatisticalRegisterSerrvice, getStatisticalTurnSerrvice, getStatisticalSumTurnSerrvice, getStatisticalSumRegisterSerrvice } = require('~/services/statisticalService')

exports.getStatisticalUser = async (req, res) => {
    try {

        const data = await getStatisticalUsersSerrvice()
        return res.status(200).json({ // Trả về dữ liệu dưới dạng JSON
            status: 'success',
            data: data
        })


    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}


exports.getStatisticalRegister = async (req, res) => {
    try {

        const data = await getStatisticalRegisterSerrvice()
        return res.status(200).json({ // Trả về dữ liệu dưới dạng JSON
            status: 'success',
            data: data
        })


    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}


exports.getStatisticalTurn = async (req, res) => {
    try {

        const data = await getStatisticalTurnSerrvice()
        return res.status(200).json({ // Trả về dữ liệu dưới dạng JSON
            status: 'success',
            data: data
        })


    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}


exports.getStatisticalSumTurn = async (req, res) => {
    try {

        const data = await getStatisticalSumTurnSerrvice()
        return res.status(200).json({ // Trả về dữ liệu dưới dạng JSON
            status: 'success',
            data: data
        })


    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}

exports.getStatisticalSumRegister = async (req, res) => {
    try {

        const data = await getStatisticalSumRegisterSerrvice()
        return res.status(200).json({ // Trả về dữ liệu dưới dạng JSON
            status: 'success',
            data: data
        })


    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}