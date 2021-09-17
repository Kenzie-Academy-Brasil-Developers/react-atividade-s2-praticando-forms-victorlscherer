import './style.css';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';

const MyForm = ({ setData }) => {

    const history = useHistory();

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório").min(6, "Min de 6 caracteres").max(15, "Max de 15 caracteres"),
        completeName: yup.string().required("Campo obrigatório").max(18, "Limite de caracteres atingido"),
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        comfirmEmail: yup.string().required("Campo obrigatório").oneOf([yup.ref("email")], "Emails devem ser iguais."),
        password: yup.string().required("Campo obrigatório").min(8, "Min de 8 caracteres"),
        confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password")], "Senha deve ser igual a outra.")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });

    const mySubmit = (data) => {
        setData(data);
        history.push("/Card")
    }


    return (
        <div className="pageContainer">
            <h1>Formulário para cadastro</h1>
            <form className="formContainer" onSubmit={handleSubmit(mySubmit)} >
                <input placeholder="Nome de usuário *" {...register("username")} /> {errors.username?.message}
                <input placeholder="Nome completo *" {...register("completeName")} /> {errors.completeName?.message}
                <input placeholder="Endereço de Email *" {...register("email")} /> {errors.email?.message}
                <input placeholder="Confirme seu Email *" {...register("comfirmEmail")} /> {errors.comfirmEmail?.message}
                <div className="passwordDiv">
                    <input placeholder="Senha *" {...register("password")} />{errors.password?.message}
                    <input placeholder="Confirme Senha *" {...register("confirmPassword")} /> {errors.confirmPassword?.message}
                </div>
                <button className="submitButton" type="submit">CADASTRAR</button>
            </form>
        </div>
    )
}

export default MyForm;