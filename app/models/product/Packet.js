const { Model, Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Packet extends Model {
        static associate(models) {
            Packet.hasMany(models.Booking, {
                foreignKey: 'packet_id'
            })
        }
    }

    Packet.init(
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
                validate: {
                    notNull: {
                        msg: 'Packet name is required'
                    },
                    notEmpty: {
                        msg: 'Packet name is required'
                    }
                }
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Packet description is required'
                    },
                    notEmpty: {
                        msg: 'Packet description is required'
                    }
                }
            },
            distance: {
                type: DataTypes.STRING(20),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Packet distance is required'
                    },
                    notEmpty: {
                        msg: 'Packet distance is required'
                    }
                }
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Packet price is required'
                    },
                    notEmpty: {
                        msg: 'Packet price is required'
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
            modelName: 'Packet',
            tableName: 'packets',
            freezeTableName: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )

    return Packet
}