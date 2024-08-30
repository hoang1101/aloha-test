
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        'QuizContests',
        {
            contest_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            deleted: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
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
            title: {
                type: DataTypes.STRING(200),
                allowNull: true,
                defaultValue: null
            },
            slug: {
                type: DataTypes.STRING(200),
                allowNull: true,
                defaultValue: null
            },
            image: {
                type: DataTypes.STRING(400),
                allowNull: true,
                defaultValue: null
            },
            code: {
                type: DataTypes.STRING(6),
                allowNull: true,
                defaultValue: null
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: '0: chưa xuất bản| 1: cuộc thi nội bộ | 2: xuất bản'
            },
            contest_bg: {
                type: DataTypes.STRING(500),
                allowNull: true,
                defaultValue: null
            },
            contest_description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_start: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            contest_end: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            timeline: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_org1: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_org2: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_navigation: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_filter_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            theme: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 2
            },
            theme_color: {
                type: DataTypes.STRING(32),
                allowNull: true,
                defaultValue: null
            },
            sticker: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            contest_url_guide: {
                type: DataTypes.STRING(400),
                allowNull: true,
                defaultValue: null
            },
            contest_org_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            contest_org_address: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            contest_org_email: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            contest_org_tel: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null
            },
            quiz_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            email_permission: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            password: {
                type: DataTypes.STRING(30),
                allowNull: true,
                defaultValue: null
            },
            register_required_settings: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            contest_require_reg_form: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            contest_show_register: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1
            },
            contest_show_done: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1
            },
            contest_show_top: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1
            },
            statistic: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            source_type: {
                type: DataTypes.STRING(20),
                allowNull: false,
                defaultValue: 'contest'
            },
            sharing_code: {
                type: DataTypes.STRING(10),
                allowNull: true,
                defaultValue: null
            },
            tenant_id: {
                type: DataTypes.BIGINT,
                allowNull: true
            }
        }, {
        tableName: 'quiz_contests',
        timestamps: false, // Nếu không muốn Sequelize tự động tạo createdAt và updatedAt
        underscored: true // Tùy chọn này để sử dụng snake_case thay vì camelCase
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
