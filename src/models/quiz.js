
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        'Quiz',
        {
            quiz_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            deleted: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            category_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                // defaultValue: sequelize.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                // defaultValue: sequelize.NOW
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: true,
                defaultValue: null
            },
            slug: {
                type: DataTypes.STRING(200),
                allowNull: false,
                unique: true
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            description: {
                type: DataTypes.STRING(1500),
                allowNull: true,
                defaultValue: null
            },
            essay: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: '0: chỉnh sửa| 1: đang duyệt | 2: xuất bản'
            },
            price: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            sold: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            listed_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
            tenant_id: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
        },
        {
            tableName: 'quiz',
            timestamps: false, // Nếu bạn không muốn Sequelize tự động tạo cột createdAt và updatedAt
            underscored: true, // Tùy chọn này để sử dụng snake_case thay vì camelCase
        }
    )
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
