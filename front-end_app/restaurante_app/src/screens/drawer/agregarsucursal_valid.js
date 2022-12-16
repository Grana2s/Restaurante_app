import * as Yup from "yup"

const validationSchema = Yup.object({
    nombre_sucursal: Yup.string().
    max(100,'Debe ser menos de 100 caracteres').
    min(2,'Debe contener mas de 1 caracter').
    required('Requerido'),
    direccion: Yup.string().
    max(100,'Debe ser menos de 100 caracteres').
    min(2,'Debe contener mas de 1 caracter'),
    ciudad: Yup.string().
    max(50,'Debe ser menos de 50 caracteres').
    min(5,'Debe contener mas de 5 caracter').
    required('Requerido'),
    telefono: Yup.string().
    max(13,'Debe ser menos de 13 caracteres').
    min(2,'Debe contener mas de 1 caracter').
    required('Requerido'),
    estado: Yup.string().
    max(50,'Debe ser menos de 50 caracteres').
    min(2,'Debe contener mas de 1 caracter').
    required('Requerido'),
    codigo_postal: Yup.string().
    max(5,'Debe ser menos de 5 caracteres').
    min(2,'Debe contener mas de 1 caracter'),
    
    
})
export default validationSchema