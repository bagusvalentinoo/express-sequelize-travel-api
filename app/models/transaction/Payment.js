const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            Payment.belongsTo(models.Booking, {
                foreignKey: 'booking_id'
            })
        }
    }

    Payment.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            booking_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'bookings',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
                validate: {
                    notNull: {
                        msg: 'Booking ID is required'
                    }
                }
            },
            payment_date: {
                type: DataTypes.DATE,
                allowNull: true
            },
            payment_method: {
                type: DataTypes.ENUM('Cash', 'Transfer'),
                allowNull: true
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            change: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            status: {
                type: DataTypes.ENUM('On Processed', 'Finished', 'Canceled'),
                allowNull: false,
                defaultValue: 'On Processed'
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
            modelName: 'Payment',
            tableName: 'payments',
            freezeTableName: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )

    return Payment
}