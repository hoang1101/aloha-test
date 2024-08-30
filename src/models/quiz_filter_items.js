
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        'Quiz',
        {
            item_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.NOW
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            filter_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            item_name: {
                type: DataTypes.STRING(300),
                allowNull: true,
                defaultValue: null
            },
            parent_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
        tableName: 'quiz_filter_items',
        timestamps: false, // Nếu không muốn Sequelize tự động tạo createdAt và updatedAt
        underscored: true // Tùy chọn này để sử dụng snake_case thay vì camelCase
    })

    Model.associate = (models) => {
        // eslint-disable-line no-unused-vars
        // Model.belongsToMany(models.Permission, {
        //     through: 'RolePermissions',
        //     foreignKey: 'role_id',
        //     as: 'permission',
        //     attributes: []
        // });
        // Model.hasMany(models.User, { foreignKey: 'role_id', as: 'user' });
        // // Model.hasMany(models.RolePermissionType, { foreignKey: 'id', as: 'role_permission_type' })
        // // Model.hasMany(models.RolePermissionType, { foreignKey: 'role_id', as: 'role_permission_type' })
        // Model.hasMany(models.PermissionSys, { foreignKey: 'role_id', as: 'permission_sys' });
        // Model.belongsTo(models.RoleType, { foreignKey: 'role_type_id', as: 'role_type' });
    }
    return Model
}
