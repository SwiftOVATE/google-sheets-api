import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Form = () => {

    useEffect(() => {
        document.title = "Form"
    })

    const navigate = useNavigate()

    const schema = yup.object().shape({
        name: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
        navigate(`/google-sheets-api/Generate/${data.name}`)
    }

    return (
        <div>
            <span className="anchor"></span>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}  >
                <h1>
                    <img alt="a" id="hrtLogo" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Sheets.svg" draggable="false" />
                    <span className='mr-5'></span> google-sheets-api
                </h1>
                <input type="text" placeholder="Name of Sheet" {...register('name')} list="name" />

                <button className='blueBackground' type='submit'>
                    Generate
                    <i className="fa-solid fa-play"></i>
                </button>
            </form>

            <datalist id="name">
                <option>Message</option>
                <option>Contacts</option>
                <option>User</option>
            </datalist>
        </div>
    );
}
