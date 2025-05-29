import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "product",
    timestamps: true, 
    underscored: true,
})

class Product extends Model {
    @Column({
        type: DataType.STRING(50),
    })
    nombre: string;

    @Column({
        type: DataType.FLOAT(5.2),      
    })
    precio: number ;

    @Column({
        type: DataType.BOOLEAN,      
    })
    disponibilidad: boolean;
}

export default Product;

