const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        static associate(models) {
            Customer.hasMany(models.Booking, {
                foreignKey: 'customer_id'
            })

            Customer.belongsTo(models.User, {
                foreignKey: 'user_id'
            })
        }
    }

    Customer.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
                validate: {
                    notNull: {
                        msg: 'User id is required'
                    }
                }
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Customer name is required'
                    }
                }
            },
            phone_number: {
                type: DataTypes.STRING(15),
                allowNull: false,
                unique: true,
                validate: {
                    notNull: {
                        msg: 'Customer phone number is required'
                    }
                }
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Customer address is required'
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
            modelName: 'Customer',
            tableName: 'customers',
            freezeTableName: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )

    return Customer
}