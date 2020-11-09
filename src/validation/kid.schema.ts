import * as Yup from "yup";

let Schema = Yup.object().shape({
    avatar: Yup.number().required().nullable(false).typeError("Selecione uma imagem de perfil válida"),
    name: Yup.string().required().nullable(false).typeError("Selecione um nome válido"),
    age: Yup.string().required().nullable(false).typeError("Selecione uma idade válida"),
    weight: Yup.number().required().nullable(false).min(0.01).typeError("Selecione um peso válido").min(0.01, "Selecione uma peso válido"),
    height: Yup.number().required().nullable(false).typeError("Selecione uma altura válida").min(0.01, "Selecione uma altura válida"),
    cephalic_perimeter: Yup.number().required().nullable(false).typeError("Selecione um perímetro cefálico válido").min(0.01,"Selecione um perímetro cefálico válido")
});

export default Schema;