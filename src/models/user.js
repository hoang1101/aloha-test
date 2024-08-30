
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define(
    'Quiz',
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      username: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(250),
        allowNull: true
      },
      remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
      },
      email_display: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(300),
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING(300),
        allowNull: true
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: -1,
        comment: '-1 : Chưa xác định | 0 : Nam | 1 : Nữ'
      },
      identity_card: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true
      },
      tel1: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      tel2: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      labor_federation_group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '0 : Không | 1 : có'
      },
      user_group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3
      },
      is_root: {
        type: DataTypes.INTEGER,
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
        defaultValue: sequelize.NOW
      },
      user_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '0 : nguoi dung | 1 : giang vien'
      },
      contest_permission: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0: free | 1: basic | 2: plus | 3: premium'
      },
      activation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      activation_code: {
        type: DataTypes.STRING(191),
        allowNull: true
      },
      job: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      submit_contest: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      apple: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      firebase_uid: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      verified: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      myaloha_user_id: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    }, {
    tableName: 'user',
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
