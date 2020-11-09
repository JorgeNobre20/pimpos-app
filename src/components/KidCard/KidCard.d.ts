export type Kid = {
    id: number;
    avatar: number;
    name: string;
    age: string;
    weight: number;
    height: number;
    cephalic_perimeter: number;
    created_at: Date;
    updated_at: Date;
    imc: number;
}

export type Props = {
	kid: Kid;
}