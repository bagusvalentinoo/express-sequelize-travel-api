const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsToMany(models.Role, {
                through: models.UserHasRole,
                foreignKey: 'user_id',
                otherKey: 'role_id'
            })

            User.hasOne(models.Admin, {
                foreignKey: 'user_id'
            })

            User.hasOne(models.Customer, {
                foreignKey: 'user_id'
            })
        }

        async assignRole(names) {
            if (Array.isArray(names)) {
                const roles = await sequelize.models.Role.findAll({
                    where: {
                        name: names
                    }
                })

                if (roles.length > 0) {
                    await this.setRoles(roles)
                } else {
                    throw new Error('Role not found')
                }
            } else {
                const role = await sequelize.models.Role.findOne({
                    where: {
                        name: names
                    }
                })

                if (role) {
                    await this.setRoles([role])
                } else {
                    throw new Error('Role not found')
                }
            }
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Name is required'
                    }
                }
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
                validate: {
                    min: 6,
                    notNull: {
                        msg: 'Username is required'
                    }
                }
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: 'Email is not valid'
                    },
                    notNull: {
                        msg: 'Email is required'
                    }
                }
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    min: 6,
                    notNull: {
                        msg: 'Password is required'
                    }
                }
            },
            created_at: {
                field: 'created_at',
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                field: 'updated_at',
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            freezeTableName: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )

    return User
}