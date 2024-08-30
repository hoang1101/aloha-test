
const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        'Tenants',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            data: {
                type: DataTypes.JSON,
                allowNull: true
            },
            version: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: '0.0.0'
            }
        }, {
        tableName: 'tenants',
        timestamps: false, // Nếu không muốn Sequelize tự động tạo createdAt và updatedAt
        underscored: true // Tùy chọn này để sử dụng snake_case thay vì camelCase
    })

    Model.associate = (models) => {

    }
    return Model
}
