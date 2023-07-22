const { v1: uuidv1 } = require('uuid')
const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            Booking.hasOne(models.Payment, {
                foreignKey: 'booking_id'
            })

            Booking.belongsTo(models.Customer, {
                foreignKey: 'customer_id'
            })
            Booking.belongsTo(models.Packet, {
                foreignKey: 'packet_id'
            })
        }
    }

    Booking.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            customer_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'customers',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            packet_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'packets',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            booking_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            total_person: {
                type: DataTypes.INTEGER,
                allowNull: false
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
            modelName: 'Booking',
            tableName: 'bookings',
            freezeTableName: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )

    return Booking
}