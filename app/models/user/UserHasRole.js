const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class UserHasRole extends Model { }

    UserHasRole.init(
        {
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            role_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            }
        },
        {
            sequelize,
            modelName: 'UserHasRole',
            tableName: 'users_has_roles',
            freezeTableName: true,
            underscored: true,
            timestamps: false
        }
    )

    return UserHasRole
}