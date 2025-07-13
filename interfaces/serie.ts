export interface SerieAttributes {
    ejercicioId: number;
    detallerutinaId: number;
    series: SerieData[];
}

export interface SerieData {
    serie: number;
    reps: number;
    peso: number;
    unidad: string;
}