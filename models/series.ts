import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { SerieAttributes, SerieData } from "../interfaces/serie";

class Serie extends Model<SerieAttributes> implements SerieAttributes {
    public ejercicioId!: number;
    public detallerutinaId!: number;
    public series!: SerieData[];
}

Serie.init({
    ejercicioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ejercicios',
            key: 'id'
        }
    },
    detallerutinaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'detalle_rutina',
            key: 'id'
        }
    },
    series: DataTypes.JSON
}, {
    sequelize: db,
    tableName: 'series',
    timestamps: false
});


export default Serie;
