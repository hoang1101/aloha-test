
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        'Quiz',
        {
            result_id: {
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
            quiz_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            question_total: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            answer_acc: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            percent: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            seconds: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            source_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            filter_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            item_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            item2_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            tel: {
                type: DataTypes.STRING(30),
                allowNull: true,
                defaultValue: null
            },
            item_description: {
                type: DataTypes.STRING(400),
                allowNull: true,
                defaultValue: null
            },
            item_description_2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            contestant_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            score: {
                type: DataTypes.DOUBLE(8, 2),
                allowNull: true,
                defaultValue: null
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            source_type: {
                type: DataTypes.STRING(20),
                allowNull: false,
                defaultValue: 'contest'
            },
            tenant_id: {
                type: DataTypes.BIGINT,
                allowNull: true,
                defaultValue: 1
            },
            fraud_warning: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            time_record: {
                type: DataTypes.JSON,
                allowNull: true
            }
        }, {
        tableName: 'quiz_result',
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
