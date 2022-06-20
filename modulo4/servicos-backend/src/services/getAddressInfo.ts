import axios from "axios"
import { Address } from "../types/Address"

const baseUrl = " https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try {
        const result = await axios.get(`${baseUrl}/${zipcode}/json/`)
        const address: Address = {
            state: result.data.uf,
            city: result.data.localidade,
            neighborhood: result.data.bairro,
            street: result.data.logradouro,
    
        }

        return address

    } catch (error) {
        console.log("erro no serviço getAddressInfo", error)
        return null
    }
}